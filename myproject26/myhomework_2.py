import random

# numbers = [1, 2, 3, 4, 5]

# # 내장함수 map

# def mapper(number):
#     return numbers ** 2

# print(list(map(mapper, numbers)))

# map(list(map(
#     lambda number: number * 2,
#     numbers,
# )))

### 

numbers = [1, 3, 5, 4, 2]

# 내장함수 sorted
# print(sorted(numbers)) # 오름차순 정렬
# print(sorted(numbers), revese=True) # 내림차순 정렬

def make_value(number):
    return number % 10
print(sorted(numbers, key=make_value))  
# # 일의 자리 오름차순   


# 리스트의 sort 
numbers.sort()
numbers.sort(key=make_value)
print(numbers)

numbers.sort(key=lambda number: number % 10)
print(numbers)

def make_random_value(number):
    return random.randint(1, 100)
numbers.sort(key=make_random_value)
print("random values :", numbers)

## map 예시

numbers = [1, 2, 3, 4, 5]

# 내장함수 map
# def mapper(number):
#     return number ** 2
# print(list(map(mapper, numbers)))

print(list(map(
    lambda number: number ** 2,
    numbers,
)))

# new_numbers = []
# for number in numbers:
#     new_numbers.append(number ** 2)

# # list comprehension
# new_numbers = [
#     number ** 2 for number in numbers
# ]


## sort 예시 
import random


numbers = [31, 89, 24, 81, 46]

          # 31, 81, 24, 46, 89   # ASC
          #  1   1   4  6    9

# 1) 내장함수 sorted
print(sorted(numbers))  # 오름차순
print(sorted(numbers, reverse=True))  # 내림차순

def make_value(number):
    return number % 10
print(sorted(numbers, key=make_value))  # 오름차순


# 2) 리스트의 sort
# numbers.sort()
# numbers.sort(key=make_value)

# numbers.sort(key=lambda number: number % 10)
# print(numbers)

def make_random_value(number):
    return random.randint(1, 100)
numbers.sort(key=make_random_value)
print("random values :", numbers)