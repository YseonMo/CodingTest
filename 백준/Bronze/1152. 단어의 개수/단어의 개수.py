word = input()
word = list(word.split(' '))


if word[0] != '' and word[-1] != '':
    print(len(word))
elif word[0] == '' and word[-1] != '':
    print(len(word)-1)
elif word[0] != '' and word[-1] == '':
    print(len(word)-1)
else:
    print(len(word)-2)