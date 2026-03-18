# sleep_in
def sleep_in(weekday, vacation):
  return not weekday or vacation

# monkey_trouble
def monkey_trouble(a_smile, b_smile):
  return a_smile == b_smile

# sum_double
def sum_double(a, b):
  return 2 * (a + b) if a == b else a + b

# diff21
def diff21(n):
  return abs(21 - n) if n < 22 else (n - 21) * 2

# parrot_trouble
def parrot_trouble(talking, hour):
  return talking and (hour < 7 or hour > 20)

# makes10
def makes10(a, b):
  return a == 10 or b == 10 or a + b == 10

# near_hundred
def near_hundred(n):
  return abs(100 - n) <= 10 or abs(200 - n) <= 10

# pos_neg
def pos_neg(a, b, negative):
  return (a < 0 and b > 0) or (a > 0 and b < 0) if not negative else a < 0 and b < 0

# not_string
def not_string(str):
  return str if str.startswith('not') else 'not ' + str

# missing_char
def missing_char(str, n):
  return str[:n] + str[n+1:]

# front_back
def front_back(str):
  if len(str) <= 1:
    return str
  return str[-1] + str[1:-1] + str[0]

# front3
def front3(str):
  front = str[:3]
  return front * 3