N = int(input())
score = list(map(int, input().split()))
M = max(score)

a = []
for i in score:
    a.append(i/M*100)

avg = sum(a)/N
print(avg)