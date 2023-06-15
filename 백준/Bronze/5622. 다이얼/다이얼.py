word = list(input())

num = ['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ']
count = 0
for i in range(len(word)):
    for j in num:
        if word[i] in j:
            count += num.index(j)+3
print(count)






