#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

void setup(void) {
    setbuf(stdin, NULL);
    setbuf(stdout, NULL);
    setbuf(stderr, NULL);
}

__attribute__((noinline))
void win(void) {
    FILE *fp = fopen("flag.txt", "r");

    if (!fp) {
        puts("flag.txt missing");
        exit(1);
    }

    char flag[128];
    fgets(flag, sizeof(flag), fp);

    printf("%s", flag);

    fclose(fp);
}

int main(void) {
    setup();

    char buf[32];

    puts("What's your name?");
    printf("> ");

    read(0, buf, 128);

    puts("Goodbye!");

    return 0;
}