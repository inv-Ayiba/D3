# from queue import Queue
# q= Queue(maxsize=8)

# for i in range(20):
#     q.put(i)
#     if(q.full()):q.get()
#     print(list(q.queue))

# # arr.index(arr[0]) ==  0

    

def noEigthLoop0(arr):
    return(arr.index(arr[0]) == 0 and arr.index(arr[1]) == 1 and arr.index(arr[2]) == 2 and arr.index(arr[3]) == 3 and arr.index(arr[4]) == 4 and arr.index(arr[5]) == 5 and arr.index(arr[6]) == 6 and arr.index(arr[7]) == 7);

def noEigthLoop(arr):
    bull=True ;
    for i in range(len(arr)):
        bull = bull and arr.index(arr[i]) == i ;
    return(bull)

tsrg=[1,2,3,4,1,6,7,8,9]
print(noEigthLoop(tsrg))
# print(noEigthLoop0(tsrg))






# for i in range(8):
#     print("arr.index("+"arr["+str(i)+"]" +" == "+ str(i)+");")
