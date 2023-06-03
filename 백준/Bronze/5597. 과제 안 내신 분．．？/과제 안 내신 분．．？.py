N = []
M = []

for n in range(1,31):
    N.append(n)

for i in range(28):
    m = int(input())
    M.append(m)

L = list(set(N)-set(M))
L.sort()
print(L[0])
print(max(L))

