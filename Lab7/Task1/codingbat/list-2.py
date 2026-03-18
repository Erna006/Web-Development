# count_evens
def count_evens(nums):
    count = 0
    for num in nums:
        if num % 2 == 0:
            count += 1
    return count

# big_diff
def big_diff(nums):
    return max(nums) - min(nums)

# centered_average
def centered_average(nums):
    sorted_nums = sorted(nums)
    return sum(sorted_nums[1:-1]) // (len(nums) - 2)

# sum13
def sum13(nums):
    total = 0
    skip_next = False
    for num in nums:
        if num == 13:
            skip_next = True
        elif skip_next:
            skip_next = False
        else:
            total += num
    return total

# sum67
def sum67(nums):
    total = 0
    in_section = False
    for num in nums:
        if num == 6:
            in_section = True
        elif num == 7 and in_section:
            in_section = False
        elif not in_section:
            total += num
    return total

# has22
def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i + 1] == 2:
            return True
    return False