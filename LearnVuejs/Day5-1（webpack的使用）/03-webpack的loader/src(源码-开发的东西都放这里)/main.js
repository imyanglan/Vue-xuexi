//在这里导入
// 1.使用commonJS的模块化规范
const {add,mul}=require('./js/mathUtils');
console.log(add(20, 30));
console.log(mul(20, 30));
// 现在就是以模块化的想法用我们的代码


// 2.使用ES6的模块化规范
// 我们来看看这样调用，通过webpack能不能使用
import {name,age,height} from "./js/info";
// 它会自动跳出后面的代码 而且在这里面我们不用写.js webpack它会自动帮我们找到这个文件，
// 在前面前端模块化调用的时候我们需要加上.js浏览器才会解析

console.log(name);
console.log(age);
console.log(height);

// 这里我们写完之后还需要重新再打包一次

// 3.依赖css文件      把它也当成一个模块 通过require去加载这个模块
require('./css/normal.css')
// 这里我们也不需要写变量，我们在上面写变量的原因是之后要用到，而样式我们只需要依赖就行了
// 如果我们直接打包的话，会报错，因为webpack不能直接对css文件进行解析，我们需要通过合适的loader
// 对该文件进行处理  我们去到官网里可以直接看如何使用合适的loader

// 4.依赖less文件
require('./css/special.less')
document.writeln('<h2>你好啊，less</h2>')
// 动态写入html