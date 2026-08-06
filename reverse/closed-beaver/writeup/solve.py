from Crypto.Cipher import AES 
from Crypto.Util.Padding import unpad
import zlib

# Tips :
# find array of the elements yang dibutuhin macem key, iv, sama ct, dll, vary per chall 
# habis itu kesana, copy as bytes string with no spaces
# hasilnya biasanya hex, tinggal di convert


key_hex = "2f81ae681e2298966528b5c3a2017b8c"
iv_hex = "a78ff3388b924d823ae6911679b18c48"
ct_hex = "84f13aa00fde14857cb6e5d68462216acffed7b09d470adad67819f3562f27d7bd7d33be74e1011b27e09f8ba85ced4f7236ea07c3aaeae7bcab5b8041160f52"

key = bytes.fromhex(key_hex)
iv = bytes.fromhex(iv_hex)
ct = bytes.fromhex(ct_hex)

cipher = AES.new(key, AES.MODE_CBC, iv)
decrypted_padded = cipher.decrypt(ct)

decrypted_compressed = unpad(decrypted_padded, AES.block_size)

flag_byte = zlib.decompress(decrypted_compressed)
print(flag_byte)
