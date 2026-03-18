a = int(input())
arr = list(map(int, input().split()))

for i in range(a // 2):
    arr[i], arr[a - 1 - i] = arr[a - 1 - i], arr[i]

for i in arr:
    print(i)