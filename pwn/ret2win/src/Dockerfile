FROM ubuntu:24.04

RUN apt-get update && \
    apt-get install -y --no-install-recommends socat && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY chall .
COPY flag.txt .

RUN chmod 555 chall && \
    chmod 444 flag.txt

EXPOSE 1337

CMD ["socat", "TCP-LISTEN:1337,reuseaddr,fork", "EXEC:/app/chall,stderr"]