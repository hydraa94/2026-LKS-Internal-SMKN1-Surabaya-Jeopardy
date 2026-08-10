#!/bin/sh

gcc -fno-stack-protector -no-pie -Wno-implicit-function-declaration -o chall chall.c