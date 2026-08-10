FROM debian:bookworm-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends socat \
    && rm -rf /var/lib/apt/lists/* \
    && useradd -m -s /usr/sbin/nologin ctf

WORKDIR /home/ctf

COPY --chown=ctf:ctf chall .
COPY --chown=ctf:ctf flag.txt .

RUN chmod 755 chall \
    && chmod 444 flag.txt

USER ctf

EXPOSE 1337

CMD ["socat", "TCP-LISTEN:1337,reuseaddr,fork", "EXEC:./chall"]