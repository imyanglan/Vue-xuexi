function add(num1,num2) {
  return num1+num2
}

function mul(num1,num2) {
  return num1*num2
}

// 我们用模块化的思想来做这个
// 第一我们用commonJS来做
// 我们在这里给它导出
module.exports={
  add,
  mul
}