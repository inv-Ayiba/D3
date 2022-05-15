function melon(what){
    return what<4?false:what%2==0?true:false;
}
array=[2,3,4,5,6,66,88,90,91]
for (let index = 0; index < array.length; index++) {
    const element =melon( array[index]);
    console.log(array[index],element)
    
}