# binary.py
n = 39
remainders = []
while n > 0:
    remainder = n % 2  # remainder of division by 2
    remainders.insert(0, remainder)  # we keep track of remainders
    n //= 2  # we divide n by 2

print(remainders)


# binary.2.py
n = 39
remainders = []
while n > 0:
    n, remainder = divmod(n, 2)
    remainders.insert(0, remainder)

print(remainders)


n = 39
print(bin(n))
