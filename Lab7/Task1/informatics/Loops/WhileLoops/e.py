a = int(input())
i = 1
c = 0
while i <= a * 2:
    if i >= a:
        print(c)
        break
    else:
        i *= 2
        c += 1