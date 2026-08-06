#!/usr/bin/python3
flag = b"LKS{p4tch1ng_b1n4ry_1s_fun}"

state = 0xDEADBEEF
ct = []

for i in range(len(flag)):
    state = (state * 1103515245 + 12345) & 0xFFFFFFFF

    k = (state >> 16) & 0xFF

    c = flag[i] ^ k ^ ((i * 0x13) & 0xFF)
    ct.append(c)

print("Salin array ini ke dalam source code C:")
formatted = ", ".join([hex(x) for x in ct])
print(f"unsigned char ct[] = {{ {formatted} }};")
