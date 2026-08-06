#!/bin/bash
set -e

mkdir -p ../dist

gcc chall.c \
    -o ../dist/chall \
    -fno-stack-protector \
    -z execstack \
    -no-pie \
    -O0

chmod +x ../dist/chall

echo "[+] Built ../dist/chall"