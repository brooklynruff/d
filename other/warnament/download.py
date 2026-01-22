import requests, threading, os

for i in range(86):
    f = open(f"archive\\game{i}.arc", "rb")
    open(f"archive\\game{i}.arcd", "wb").write(f.read())
    f.close()
    os.remove(f"archive\\game{i}.arc")