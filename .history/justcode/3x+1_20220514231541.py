def func(num):
    count1=0 ;
    countSteps=0;
    while(count1 !=1):
        if (num%2==0):
             num=num/2 
        else:
            num=(3*num)+1
        print(num)
        if(num==1):
            count1+=1
            print("11111",count1)
            # if(count1 == 4):
            #     print("44444",count1)
            #     break
            # else:
            #     continue

            
print(func(11))