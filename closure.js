// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// var counter = (function() {
//   var privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }

//   return {
//     increment: function() {
//       changeBy(1);
//     },

//     decrement: function() {
//       changeBy(-1);
//     },

//     value: function() {
//       return privateCounter;
//     }
//   };
// })();

// console.log(counter.value());  // 0.

// counter.increment();
// counter.increment();
// console.log(counter.value());  // 2.

// counter.decrement();
// console.log(counter.value());  // 1.

var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
  
      decrement: function() {
        changeBy(-1);
      },
  
      value: function() {
        return privateCounter;
      }
    }
  };
  
  var counter1 = makeCounter();
  var counter2 = makeCounter();
  
  alert(counter1.value());  // 0.
  
  counter1.increment();
  counter1.increment();
  alert(counter1.value()); // 2.
  
  counter1.decrement();
  alert(counter1.value()); // 1.
  alert(counter2.value()); // 0.

// //   Notice how the two counters maintain their independence from one another. Each closure references a different version of the privateCounter variable through its own closure. Each time one of the counters is called, its lexical environment changes by changing the value of this variable. Changes to the variable value in one closure don't affect the value in the other closure.

// // Note: Using closures in this way provides benefits that are normally associated with object-oriented programming. In particular, data hiding and encapsulation.