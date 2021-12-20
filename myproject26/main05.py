
# list
# 항상 좌항과 우항의 개수가 같아야함.(다르면 error 발생)

name, age, region = ["Tom", 10, "Seoul"]

# name에만 Tom이 들어가고 *extra에 나머지 인자가 들어감.
# name, *extra = ["Tom", 10, "Seoul"] 혹은 

name, *__ = ["Tom", 10, "Seoul"]
__, age, __ = ["Tom", 10, "Seoul"]
