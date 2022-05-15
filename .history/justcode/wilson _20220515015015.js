function factorial(num){
      return num<0?  -1 :num==0?  1: num * factorial(num-1)}
function wily(num){
    first=(factorial(num-1)+1)/(num*num)
    second=first%1
    return !(second)
}
// console.log(wily(4))

for (let index = 0; index < 200; index++) {
    const element = wily(index);
    element?(console.log(index,element)):p=0
    // console.log()
    
}