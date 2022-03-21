function reverseString(str) {
    return str.split("").reverse().join("");
}
// https://coderbyte.com/algorithm/3-common-javascript-closure-questions# 
//had to make it do what it sounded like it did
function  convBase(ase){
 return function(N) {
        holder=""
        const num=N
        for (iter2=1;iter2<=(num.toString()).length;iter2++){
           holder += (N % ase).toString()
           N=parseInt(N /ase)
        }
        // N % ase
        return(parseInt(reverseString(holder)))
    }
}

toBaseSix= convBase(6)

console.log(toBaseSix(100))


