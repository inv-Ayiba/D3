def func(num):
    array=[];
    count1=0 ;
    countSteps=0;
    while(count1 !=1):
        if (num%2==0):
             num=num/2 
        else:
            num=(3*num)+1
        print(num);array.append(num)
        countSteps+=1
        if(num==1):
            count1+=1
            # print("11111",count1)
            # if(count1 == 4):
            #     print("44444",count1)
            #     break
            # else:
            #     continue
    return("finished","steps: "+ str(countSteps),"max: "+str(max(array)))

target=4000000           
print(func(target))
print("from "+str(target))