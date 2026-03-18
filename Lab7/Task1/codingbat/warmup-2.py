# string_times
def string_times(str, n):
  return str * n

# front_times
def front_times(str, n):
  return str[:3] * n

# string_bits
def string_bits(str):
  return str[::2]

# string_splosion
def string_splosion(str):
  result = ""
  for i in range(len(str)):
    result += str[:i+1]
  return result

# last2
def last2(str):
  if len(str) < 2:
    return 0
  last2 = str[-2:]
  count = 0
  for i in range(len(str) - 2):
    if str[i:i+2] == last2:
      count += 1
  return count

# array_count9
def array_count9(nums):
  return nums.count(9)

# array_front9
def array_front9(nums):
  return 9 in nums[:4]

# array123
def array123(nums):
  for i in range(len(nums) - 2):
    if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
      return True
  return False

# string_match
def string_match(a, b):
  count = 0
  for i in range(min(len(a), len(b)) - 1):
    if a[i:i+2] == b[i:i+2]:
      count += 1
  return count