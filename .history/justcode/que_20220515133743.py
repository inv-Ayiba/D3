# from queue import Queue
# q= Queue(maxsize=8)
# q.put(i)
# if(q.full()):q.get()

# arr.index(arr[0]) ==  0

    

def noEigthLoop(arr):
        return(arr.index(arr[0]) == 0 and arr.index(arr[1]) == 1 and arr.index(arr[2]) == 2 and arr.index(arr[3]) == 3 and arr.index(arr[4]) == 4 and arr.index(arr[5]) == 5 and arr.index(arr[6]) == 6 and arr.index(arr[7]) == 7);
tsrg=[1,2,3,4,5,1,7,8]
print(noEigthLoop(tsrg))






# for i in range(8):
#     print("arr.index("+"arr["+str(i)+"]" +" == "+ str(i)+");")
