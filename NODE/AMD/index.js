require(['a'], function (A) {
  // * moduleA就是moduleA.js模块传入的函数执行后返回的对象{info：function}
  console.log(A)
  // * 输出
  console.log(A.info('zhaopeng', 27))
});