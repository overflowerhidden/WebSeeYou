/**
 * * export命令可以出现在模块的任何位置，只要处于模块顶层就可以。
 */

// todo 导出：写法一
export let firstName = 'Michael';
export let lastName = 'Jackson';
export let year = 1958;

export function multiply(x, y) {
  return x * y;
};

// todo 导出：写法二
let firstName = 'Michael';
let lastName = 'Jackson';
let year = 1958;

export { firstName, lastName, year };

// todo 导出：写法三
function v1() { return 123; }
function v2() { return 456; }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion // 重命名后，v2可以用不同的名字输出两次。
};

// todo 导出：写法四（为了给用户提供方便，让他们不用阅读文档就能加载模块。为模块指定默认输出。）
export default function foo() {
  console.log('foo');
}


// todo 导入：写法一
import { firstName, lastName, year } from './c.js';
function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}

// todo 导入：写法二 （将输入的变量重命名。）
import { lastName as surname } from './profile.js';

// todo 导入：写法三（仅执行lodash模块，但是不输入任何值。）
import 'lodash';
import 'lodash'; // 多次重复执行同一句import语句，那么只会执行一次，而不会执行多次。

// todo 导入：写法四 （模块的整体加载）
import * as total from './c.js';


// todo 导入：写法五 （针对导出四）
import foo from 'foo';


// todo 输出/导入类
// MyClass.js
export default class { }

// main.js
import MyClass from 'MyClass';
let o = new MyClass();

// todo export 与 import 的复合写法

// 对外转发
export { foo, bar } from 'my_module';
// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };

// 接口改名
export { foo as myFoo } from 'my_module';

// 整体输出
export * from 'my_module';

// 默认接口
export { default } from 'foo';

// 具名接口改为默认接口
export { es6 as default } from './someModule';
// 等同于
import { es6 } from './someModule';
export default es6;

// 默认接口也可以改名为具名接口
export { default as es6 } from './someModule';

// 导出全部并重命名
export * as ns from "mod";
// 等同于
import * as ns from "mod";
export { ns };