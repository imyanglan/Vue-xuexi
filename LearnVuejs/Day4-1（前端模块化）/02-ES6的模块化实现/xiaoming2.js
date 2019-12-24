// 然后在这里  这样导入   这里的"./xiaoming"不能简写要加.js  要加一个东西才能简写
import{flag,sum} from "./xiaoming.js";
// 在这个文件里想使用xiaoming.js文件里的flag
if (flag){
  console.log('小明是天才');
  console.log(sum(10, 20));
}

// 然后我们把通过default的导出的东西从这里导入
// 首先我们不需要大括号了  这样导出就行了 而且导出的名字也可以随便起了
import addr from "./xiaoming.js";

console.log(addr);

// 统一全部导入
import * as xiaoming from './xiaoming.js';
// 我们拿变量就可以通过这种方式来拿
console.log(xiaoming.flag);