a = int(input())
arr = list(map(int, input().split()))
c = 0

for i in range(1, a):
    if arr[i] > arr[i - 1]:
        c += 1
print(c)