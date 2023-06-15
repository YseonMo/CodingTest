T = int(input())

for i in range(T):
    R, S = input().split()

    for q in S:
        print(q * int(R), end='')
    print()
