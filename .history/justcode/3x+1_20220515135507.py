from queue import Queue
q= Queue(maxsize=8)
def noEigthLoop(arr):return(arr.index(arr[0]) == 0 and arr.index(arr[1]) == 1 and arr.index(arr[2]) == 2 and arr.index(arr[3]) == 3 and arr.index(arr[4]) == 4 and arr.index(arr[5]) == 5 and arr.index(arr[6]) == 6 and arr.index(arr[7]) == 7);

def func(num):
    array=[];
    count1=0 ;
    countSteps=0;
    while(count1 !=1):
        if (num%2==0):
             num=num/2 
        else:
            num=(3*num)+1
        # print(num);
        array.append(num)
        countSteps+=1
        ##queue implememntation
        q.put(num)
        if(q.full()):
            
            if(not(noEigthLoop(list(q.queue)))):
                count1+=1
            q.get()
            # print("11111",count1)
            # if(count1 == 4):
            #     print("44444",count1)
            #     break
            # else:
            #     continue
    return("finished","steps: "+ str(countSteps),"max: "+str(max(array)),"loop"+str(list(q.queue)))

target= -27           
print(func(target))
print("from "+str(target))