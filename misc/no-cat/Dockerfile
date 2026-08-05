FROM ubuntu:24.04

RUN apt update && apt install -y \
    bash \
    socat \
    less \
    file \
    coreutils \
    binutils \
    xxd \
    && rm -rf /var/lib/apt/lists/*

# Disable cat
RUN mv /usr/bin/cat /usr/bin/cat.disabled

# Create guest user
RUN useradd -m -s /bin/bash guest

# Copy challenge files
COPY secret.txt /home/guest/secret.txt
COPY nothin.txt /home/guest/nothin.txt

RUN chown -R guest:guest /home/guest

WORKDIR /home/guest
USER guest

EXPOSE 1337

CMD ["socat", "TCP-LISTEN:1337,reuseaddr,fork", "EXEC:'bash -i',pty,setsid,ctty,stderr,sigint,sane"]