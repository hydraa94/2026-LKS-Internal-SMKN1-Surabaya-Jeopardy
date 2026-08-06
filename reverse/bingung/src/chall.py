def check_flag(user_input):
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

    if len(user_input) != len(target):
        return False

    for i in range(len(user_input)):
        if (ord(user_input[i]) ^ key) != target[i]:
            return False

    return True


if __name__ == "__main__":
    flag = input("Masukkan Flag: ")
    if check_flag(flag):
        print("Akses Diterima!")
    else:
        print("Akses Ditolak!")
