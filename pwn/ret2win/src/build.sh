#!/usr/bin/env bash
set -e

gcc \
    -m32 \
    -O0 \
    -g \
    -fno-stack-protector \
    -fno-omit-frame-pointer \
    -fno-pie \
    -no-pie \
    -mpreferred-stack-boundary=2 \
    -o chall \
    chall.c