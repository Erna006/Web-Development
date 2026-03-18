def Election(x, y, z):
    return (x + y + z) >= 2

x, y, z = map(int, input().split())
print(int(Election(x, y, z)))