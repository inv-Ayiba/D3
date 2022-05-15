def func(num):
    count1=0 ;
    countSteps=0;
    while(num)!=1:
        if (num%2==0):
             num=num/2 
        else:
            num=(3*num)+1
        print(num)
        if(num==1):
            count1+=1
            print("11111")
            if(count1==4):
                break

            
print(func(11))