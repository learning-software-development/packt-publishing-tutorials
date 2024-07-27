x = 3

def funcY(y):
    print(y)
funcY(x)  # prints: 3

x = [1, 2, 3]

def funcX(x):
    x[1] = 42  # this changes the caller!
    x = 'something else'  # this points x to a new string object

funcX(x)
print(x)  # still prints: [1, 42, 3]


def func(**kwargs):
    print(kwargs)
# All calls equivalent. They print: {'a': 1, 'b': 42}
func(a=1, b=42)
func(**{'a': 1, 'b': 42})
func(**dict(a=1, b=42))
