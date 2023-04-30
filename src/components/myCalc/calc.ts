function calc(str: string) {
  const strarr = str.split('')
  console.log(strarr)
  // 操作符 数组
  const opArr = ['+', '-', '*', '/', '(', ')']
  //数据栈，储存后缀表达式结果
  const dataStack = new Array()
  //操作符栈
  const signStack = new Array()
  let temp = ''
  strarr.forEach((str, index) => {
    if (!opArr.includes(str)) {
      temp += str
      if (strarr.length == index + 1) dataStack.push(temp)
      if (opArr.includes(strarr[index + 1])) dataStack.push(temp)

      // //直接入栈
      // dataStack.push(str)
    } else {
      //操作符入栈出栈计算
      temp = ''
      mtaCalculate(str)
    }
  })
  //最后将操作符栈 剩余元素一次出栈
  while (signStack.length > 0) {
    dataStack.push(signStack.pop())
  }
  //完成直接输出结果
  console.log('中缀（含括号）转后缀结果:', dataStack)
  //中转后操作符入栈出栈计算
  function mtaCalculate(str: string) {
    if (str != '(' && str != ')') {
      //不是括号
      while (mtaGetSignPrior(str) <= mtaGetSignPrior(signStack[signStack.length - 1])) {
        dataStack.push(signStack.pop())
        if (signStack.length <= 0) {
          break
        }
      }
      signStack.push(str) //将这个符号入栈
    } else if (str == ')') {
      //遇到右括号，直接弹出，直到遇到左括号
      while (signStack[signStack.length - 1] != '(') {
        dataStack.push(signStack.pop())
      }
      //遇到左括号且之间的值也全部弹出，最后弹出左括号
      signStack.pop()
    } else {
      //左括号，入栈
      signStack.push(str)
    }
  }
  //获取操作符的优先级
  function mtaGetSignPrior(str: any) {
    switch (str) {
      case '+':
      case '-':
        return 1
      case '*':
      case '/':
        return 2
      default:
        return 0
    }
  }

  //中间数据栈，储存扫描后缀表达式入栈数据
  const middleDataStack = new Array()
  let result = '' //计算结果
  dataStack.forEach((data) => {
    if (!opArr.includes(data)) {
      middleDataStack.push(data)
    } else {
      //遇到了操作符，直接出栈计算
      const r = middleDataStack.pop()
      const l = middleDataStack.pop()
      let res = 0

      switch (data) {
        case '+':
          res = parseFloat(l) + parseFloat(r)
          break
        case '-':
          res = parseFloat(l) - parseFloat(r)
          break
        case '*':
          res = parseFloat(l) * parseFloat(r)
          break
        case '/':
          res = parseFloat(l) / parseFloat(r)
          break
        default:
          return '数据格式错误！'
      }
      //结果入栈
      middleDataStack.push(res)
    }
  })
  result = middleDataStack.pop().toFixed(2) //保留两位小数

  return result
  //   console.log('计算结果:', result)
}

export { calc }
