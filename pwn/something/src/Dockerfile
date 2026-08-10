FROM ubuntu:24.04

RUN apt update && apt install -y \
    socat \
    gcc \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY src/ .
RUN ./build.sh && \
    mv ../dist/chall /app/chall

RUN useradd -m ctf && \
    chown root:ctf /app/flag.txt && \
    chmod 440 /app/flag.txt

USER ctf

EXPOSE 1337

CMD ["socat","TCP-LISTEN:1337,reuseaddr,fork","EXEC:./chall"]
