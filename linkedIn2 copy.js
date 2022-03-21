// // https://technorj.com/linkedin-javascript-skill-assessment-2021/   https://coderbyte.com/algorithm/3-common-javascript-closure-questions#
// // a question , time out and IIF... is used to make it work (here it is https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)


// for (var i = 1; i <= 4; i++) {
//     setTimeout(function () {
//     console.log(i);
//     }, i * 1000);
//     }

// for (var i=1; i<=4; i++) {
//      (function(j) { 
//          setTimeout(function(){ 
//              console.log(j); }, j*1000); })(i) }

// for (var i = 0; i <= 3; i++) {
// setTimeout(function() { console.log(i+"wrong"); }, 1000 + i);
// }

for (var i = 0; i < 3; i++) {
    setTimeout(function(i_local) { return function() { console.log(i_local); } 
    }(i), 1000 + i);
  }