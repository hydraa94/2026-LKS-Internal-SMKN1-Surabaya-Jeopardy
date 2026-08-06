FROM ubuntu:24.04

RUN apt update && apt install -y \
    socat \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY dist/chall .
COPY src/flag.txt .

RUN useradd -m ctf && \
    chown root:ctf /app/flag.txt && \
    chmod 440 /app/flag.txt

USER ctf

EXPOSE 1337

CMD ["socat","TCP-LISTEN:1337,reuseaddr,fork","EXEC:/app/chall"]