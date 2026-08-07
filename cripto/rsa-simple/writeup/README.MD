##RSA Easy – Writeup

#Ringkasan

Challenge RSA klasik dengan modulus kecil. Flag dienkripsi per karakter (bukan per blok), sehingga setiap karakter diubah ke nilai ASCII lalu dienkripsi dengan RSA.

#Data yang diberikan

n = 3233
e = 17
ciphertexts = [2726, 597, 2680, ...]

#Langkah penyelesaian


Faktorisasi modulus
Karena n sangat kecil, cukup trial division:

n = 3233 = 61 × 53



Hitung φ(n)

φ(n) = (p-1)(q-1) = 60 × 52 = 3120



Cari private key d

d ≡ e⁻¹ mod φ(n)
d = pow(17, -1, 3120) = 2753



Dekripsi setiap ciphertext
Untuk setiap c di list:

m = pow(c, d, n)
karakter = chr(m)



Gabungkan hasilnya → flag lengkap.

#Flag

LKS{rsa_its_fun_semangat_lksnya}

#Catatan

Challenge ini sengaja dibuat mudah agar peserta memahami alur RSA (enkripsi per karakter + faktorisasi sederhana).
Solver sudah disediakan di solver.py. Tinggal ganti nilai N, E, dan CIPHERTEXTS jika ada challenge serupa.

