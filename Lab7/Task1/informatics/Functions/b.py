def power(a, b):
    res = 1.0
    for i in range(b):
        res *= a
    return res

data = input().split()
a = float(data[0])
n = int(data[1])
print(power(a, n))