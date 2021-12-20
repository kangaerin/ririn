
def mysum3(x, y, z):
    return x, y, z

## 위치 인자는 순서가 바뀌면 치명적임.
print(mysum3(1,2,3))

# 키워드 인자는 순서가 바뀌어도 상관 X
print(mysum3(x=1, y=2, z=3))
print(mysum3(z=3, y=2, x=1))

kwargs = {"x": 1, "y": 2, "z": 3}
mysum3(**kwargs) #unpacking

people = [
  { "name": 'Tom', "age": 10, "region": 'Seoul' },
  { "name": 'Steve', "age": 12, "region": 'Pusan' }
]

for person in people:
    print(person["name"], person["age"])