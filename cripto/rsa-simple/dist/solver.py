# masukan saja itunya lalu hapus yang gk perlu lalu di inikan 
n = []
E = []
CIPHERTEXTS = []


def factor_n(n: int):
    """Faktorisasi n menjadi p dan q (trial division, cocok untuk n kecil)."""
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return i, n // i
    raise ValueError("Tidak dapat memfaktorkan n")


def main():
    p, q = factor_n(n)
    phi = (p - 1) * (q - 1)
    d = pow(E, -1, phi)  # private key

    plaintext = "".join(chr(pow(c, d, n)) for c in CIPHERTEXTS)
    print(plaintext)


if __name__ == "__main__":
    main()
