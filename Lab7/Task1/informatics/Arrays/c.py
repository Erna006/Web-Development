a = int(input())
arr = list(map(int, input().split()))
c = 0

for i in arr:
    if i > 0:
        c += 1
print(c)