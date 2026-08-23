FROM ubuntu:24.04

RUN dpkg --add-architecture i386 && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
        gcc-multilib socat && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY chall.c .
COPY build.sh .

RUN chmod +x build.sh && ./build.sh

COPY flag.txt .

RUN chmod 555 chall && \
    chmod 444 flag.txt

EXPOSE 1337
CMD ["socat", "TCP-LISTEN:1337,reuseaddr,fork", "EXEC:/app/chall,stderr"]