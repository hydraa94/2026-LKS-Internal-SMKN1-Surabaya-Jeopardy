import pathlib

FLAG = "LKS{rsa_its_fun_semangat_lksnya}"


def main():
    p = 61
    q = 53
    n = p * q
    e = 17
    phi = (p - 1) * (q - 1)
    d = pow(e, -1, phi)

    ciphertexts = [pow(ord(ch), e, n) for ch in FLAG]

    base_dir = pathlib.Path(__file__).resolve().parent.parent
    dist_dir = base_dir / "dist"
    dist_dir.mkdir(exist_ok=True)

    (dist_dir / "challenge.txt").write_text(
        "RSA Easy Challenge\n\n"
        "The flag was encrypted one character at a time using RSA.\n"
        "Each ciphertext is computed as c = m^e mod n, where m is the ASCII value of a character.\n\n"
        f"n = {n}\n"
        f"e = {e}\n"
        f"ciphertexts = {ciphertexts}\n",
        encoding="utf-8",
    )

    (base_dir / "src" / "flag.txt").write_text(FLAG + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
