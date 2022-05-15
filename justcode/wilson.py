def factorial(num):
    return (  -1 if num<0 else (1 if num==0 else num * factorial(num-1)))

def wily(num):
    first=(factorial(num-1)+1)/(num*num)
    # print(("1st",first))
    second=first%1
    # print(("2nd",second))
    return not(second)

for index in range(1,50) :
    element = wily(index);
    print(index,element) if(element) else {}
     
    # print(index,element)
    # print("factorial(index)",factorial(index))
    
# print(factorial(1))
    
