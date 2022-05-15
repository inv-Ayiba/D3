from queue import Queue
q= Queue(maxsize=100)


def noEigthLoop(arr):
    bull=True ;
    for i in range(len(arr)):
        bull = bull and arr.index(arr[i]) == i ;
    return(bull) ;

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
        # print(q.queue)
        if(q.full()):
            
            if(not(noEigthLoop(list(q.queue)))):
                count1+=1
            q.get()
            
    return("finished","steps: "+ str(countSteps),"max: "+str(max(array)),"loop"+str(list(q.queue)))

target= -34           
print(func(target))
print("from "+str(target))
# -27 :-5.0, -14.0, -7.0, -20.0, -10.0
# -2,-4,-16,-48 : -1.0, -2.0
# -17, 34 : -17.0, -50.0, -25.0, -74.0, -37.0, -110.0, -55.0, -164.0, -82.0, -41.0, -122.0, -61.0, -182.0, -91.0, -272.0, -136.0, -68.0, -34.0