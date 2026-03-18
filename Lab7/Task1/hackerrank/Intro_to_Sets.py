def average(array):
    qwe = set(array)
    res = sum(qwe) / len(qwe)
    return res

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)