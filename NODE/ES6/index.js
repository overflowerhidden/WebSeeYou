/**
 * 历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。
 * ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。
 * 不再需要UMD模块格式了，将来服务器和浏览器都会支持 ES6 模块格式。
 */

// * export 模块导出、 import模块导入

// todo 1 指定加载某个输出值
// import { firstName, lastName, year, setYear } from './a.js';
// console.log(firstName, lastName, year);
// function setName(element) {
//   element.textContent = firstName + ' ' + lastName;
// }

// let list = {}
// setName(list)
// console.log(list);

// *  export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
// console.log(year); // 1995
// setYear();
// log(total.year); // 1996


// todo 2 使用整体加载
// import * as total from './a.js';
// function setName(element) {
//   element.textContent = total.firstName + ' ' + total.lastName;
// }

// let list = {}
// setName(list)
// console.log(list);

// *  export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
// console.log(total.year); // 1995
// total.setYear();
// console.log(total.year); // 1996

// todo 3  export&&default语法 
// todo 3 (为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出)
import total from './b.js';
function setName(element) {
  element.textContent = total.firstName + ' ' + total.lastName;
}

let list = {}
setName(list)
console.log(list);