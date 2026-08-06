# Writeup

## by frizz

## Sleepy

### Step by step

- opened the binary in ghidra and let ghidra auto analysis to analyze the binary
- find the main.checkflag func using ghidra symbol tree filter features
- analyze it, find the arr of each AES CBC component, e.g. iv.array, key.array, and the ct. i think most of them are PTR to the actual data. (for the ct, find the PTR where it was being xored with)
- extract it, and just decrypt it, match the padding and decompress because it was zlib compressed (so obv ngl)
- for refrence look at the solve.py
