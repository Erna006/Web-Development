n = int(input())
country_set = set()

for _ in range(n):
    country = input().strip()
    country_set.add(country)
    print(len(country_set))