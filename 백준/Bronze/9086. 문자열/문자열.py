T = int(input())

for i in range(T):
    word = list(map(str, input()))
    a = word[0]
    b = word[-1]
    print(a+b)
