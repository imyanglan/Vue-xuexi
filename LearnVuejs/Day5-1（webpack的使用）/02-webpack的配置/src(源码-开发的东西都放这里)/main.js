//在这里导入
const {add,mul}=require('./mathUtils');
console.log(add(20, 30));
console.log(mul(20, 30));
// 现在就是以模块化的想法用我们的代码


// 我们来看看这样调用，通过webpack能不能使用
import {name,age,height} from "./info";
// 它会自动跳出后面的代码 而且在这里面我们不用写.js webpack它会自动帮我们找到这个文件，
// 在前面前端模块化调用的时候我们需要加上.js浏览器才会解析

console.log(name);
console.log(age);
console.log(height);

// 这里我们写完之后还需要重新再打包一次