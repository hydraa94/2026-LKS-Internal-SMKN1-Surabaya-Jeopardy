# Write Up

1. Player identify the binary by decompile, checksec, etc
2. Player finds out that there's variable sized **32 bytes** and maximum input is **128 bytes**. This allow us to do **buffer overflow**
3. Player search through the binary, what's the address of the win function (even its not needed when u have pwntools)
4. Player experimenting and search through binary how much padding is needded to touch the return address
5. Player overwrite the original return address with win function address.