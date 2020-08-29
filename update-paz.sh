#!/bin/bash

if [ -e paz.gpg ]; then
    rm paz.gpg
fi

cat ~/.pazrc.remote | gpg2 --output paz.gpg --symmetric --cipher-algo aes256 --passphrase $(python3 ~/git/paz/paz.py -bs remote) --batch --pinentry-mode=loopback
