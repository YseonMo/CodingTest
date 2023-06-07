a = []

for i in range(10):
    put = int(input())
    a.append(put % 42)
    b = set(a)
print(len(b))