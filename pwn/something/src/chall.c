#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

void execute() {
    char buf[256];
    printf("Send me something: ");
    read(0,buf,256);
    ((void(*)())buf)();
}

int main(){
    setbuf(stdout, NULL);
    execute();
    return 0;
}