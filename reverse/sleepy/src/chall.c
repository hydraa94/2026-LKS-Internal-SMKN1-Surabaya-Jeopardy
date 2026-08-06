// chall.c
#include <stdio.h>
#include <unistd.h>

unsigned char ct[] = {0x4d, 0x61, 0xb3, 0x3,  0x2f, 0xe,  0x72, 0xce, 0x33,
                      0x8f, 0x6f, 0xee, 0x4,  0xe3, 0x11, 0x1,  0x36, 0x46,
                      0x20, 0xd5, 0xe7, 0xbb, 0x93, 0x6f, 0x77, 0x26, 0xea};

void decrypt_and_print() {
  unsigned int state = 0xDEADBEEF;
  int len = sizeof(ct);

  for (int i = 0; i < len; i++) {
    // Algoritma LCG konvensional
    state = (state * 1103515245 + 12345);
    unsigned char k = (state >> 16) & 0xFF;

    ct[i] ^= k;
    ct[i] ^= (i * 0x13);
  }

  printf("Here, I give you some cookie: ");
  for (int i = 0; i < len; i++) {
    putchar(ct[i]);
  }
  printf("\n");
}

int main() {
  printf("Currently I am baking some cookie, but i feel sleepy...\n");
  printf("Can you wake me up so that my cookie didn't burn?\n");
  printf("I promise i would give you some of my cookie\n");

  sleep(10800);

  decrypt_and_print();
  return 0;
}
