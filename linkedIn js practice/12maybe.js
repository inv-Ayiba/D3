// 'use strict';
function logThis() {
this.desc = 'logger';
console.log(this);
}
new logThis();
// new logThis(); gives: logThis { desc: 'logger' }
// logThis(); gives output below,
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 208.582200050354,
      nodeStart: 3.198899984359741,
      v8Start: 12.431299924850464,
      bootstrapComplete: 137.73790001869202,
      environment: 57.125200033187866,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1645965253824.606
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  desc: 'logger'
}
*/