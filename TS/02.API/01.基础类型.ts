/**
 * 基础类型
 */

// boolean
let isDone: boolean = false;

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// string
let aname: string = "bob";
let aage: number = 37;
let sentence1: string = `Hello, my name is ${aname}.I'll be ${aage + 1} years old next month.`;
let sentence2: string = "Hello, my name is " + aname + ".\n\n" + "I'll be " + (aage + 1) + " years old next month.";

// 数组
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// 元组 Tuple
let x: [string, number];
x = ['hello', 10];
// x = [10, 'hello'];

// 枚举
enum Color { Red = 1, Green = 2, Blue = 4 }
let c: Color = Color.Green;
let colorName: string = Color[4];
console.log(colorName);

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.ifItExists();
notSure.toFixed();

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

let list: any[] = [1, true, "free"];
list[1] = 100;

// 无任何类型 Void 
let unusable: void = undefined; // 只能为它赋予undefined和null

// Null 和 Undefined （默认情况下null和undefined是所有类型的子类型。）
let u: undefined = undefined;
let n: null = null;

// 永不存在的值的类型 Never

// Object
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// 类型断言
let someValue1: any = "this is a string";
let strLength1: number = (<string>someValue1).length;
let someValue2: any = "this is a string";
let strLength3: number = (someValue2 as string).length;