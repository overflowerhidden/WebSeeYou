require(['a', 'b'], function (A, B) {
  // * A就是 a.js 模块传入的函数执行后返回的对象 {info：function}
  console.log(A)
  // * 输出
  console.log(A.info('zhaopeng', 27))
  console.log(B.info('臭臭', 2))
});