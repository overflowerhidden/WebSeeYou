// * CommonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
// let { counter, setCounter } = require('./b')
let { counter, setCounter, getCounter } = require('./b.js')
console.log('step 01:', counter);

// * `counter`输出以后，`b.js`模块内部的变化就影响不到 `counter`了。
setCounter()
console.log('step 02:', counter);
console.log('step 03:', getCounter());  // 内部值改变
