// 只要将数据导出暴露了  任何地方都能用导入拿到自己这里来使用
import {num1,num2} from "./xiaoming.js";
// 小红也使用了同名的变量
var name='小红'
var flag=false
console.log(num1);
console.log(num2);

// 如果还要导入类
import {Person} from "./xiaoming.js";
const  p =new Person();
p.run();