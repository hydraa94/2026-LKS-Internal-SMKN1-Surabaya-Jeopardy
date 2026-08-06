from pwn import xor

target = [
    93,
    90,
    66,
    106,
    115,
    37,
    115,
    104,
    78,
    97,
    104,
    101,
    121,
    33,
    127,
    78,
    33,
    97,
    114,
    33,
    117,
    34,
    108,
]
key = 17

print(xor(target, key))
