##RSA Easy – Writeup

#Ringkasan

Challenge RSA klasik dengan modulus kecil. Flag dienkripsi per karakter (bukan per blok), sehingga setiap karakter diubah ke nilai ASCII lalu dienkripsi dengan RSA.

#Data yang diberikan

n = 3233
e = 17
ciphertexts = [2726, 597, 2680, ...]
#langkah

tinggal tambahkan n e c ke solver.py

#Flag

LKS{rsa_its_fun_semangat_lksnya}

#Catatan

Challenge ini sengaja dibuat mudah agar peserta memahami alur RSA (enkripsi per karakter + faktorisasi sederhana).
Solver sudah disediakan di solver.py. Tinggal ganti nilai N, E, dan CIPHERTEXTS jika ada challenge serupa.

