/**
 * * 通过对 CommonJs、CMD、AMD 进一步处理，它没有自己专有的规范，是集结了 CommonJs、CMD、AMD 的规范于一身。
 * * 它可以通过运行时或者编译时让同一个代码模块在使用 CommonJs、CMD 甚至是 AMD 的项目中运行。
 */

// * UMD简单实现
((global, factory) => {
  //如果当前的上下文有define函数，说明处于AMD环境下
  if (typeof define === 'function' && define.amd) {
    define(["moduleA"], factory);
  } else if (typeof exports === 'object') {// commonjs
    let moduleA = require("moduleA")
    modules.exports = factory(moduleA)
  } else {
    global.moduleA = factory(global.moduleA) // 直接挂载成 windows全局变量 
  }
})(this, (moduleA) => {
  // 本模块的定义
  return {

  }
})