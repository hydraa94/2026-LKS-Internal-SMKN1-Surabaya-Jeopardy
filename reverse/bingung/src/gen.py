strings = "LKS{b4by_pyth0n_0pc0d3}"
key = 17

# Menggunakan list comprehension [] dan langsung menerapkan XOR statis
target = [ord(char) ^ key for char in strings]

print("Salin array ini ke target di chall.py:")
print(target)
