const operatorRand: {
  [key: string]: number
} = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
}

/**
 * 中缀表达式转换成逆波兰表达式
 * @param {string[]} str 中缀表达式
 */
function convert(inputArr: string[]) {
  if (!Array.isArray(inputArr) || inputArr.length === 0) return []

  const operatorArr: string[] = []
  const outputArr: string[] = []

  inputArr.forEach(input => {
    if (!Number.isNaN(Number(input))) {
      // 如果是数字，只接输出
      outputArr.push(input)
    } else if (input === '(') {
      // 如果是左括号，入操作符栈
      operatorArr.push(input)
    } else if (input === ')') {
      // 如果是右括号，循环输出，知道匹配到左括号为止
      while (operatorArr.length > 0) {
        const operator = operatorArr.pop() as string
        if (operator === '(') break
        outputArr.push(operator)
      }
    } else {
      // 如果是运算符
      while (operatorArr.length >= 0) {
        const topOperator = operatorArr[operatorArr.length - 1]

        // 如果运算符栈为空，或者栈顶运算符是(，或者当前运算符优先级比栈顶运算符优先级高
        if (
          operatorArr.length === 0 ||
          topOperator === '(' ||
          operatorRand[input] > operatorRand[topOperator]
        ) {
          operatorArr.push(input)
          break
        } else {
          outputArr.push(operatorArr.pop() as string)
        }
      }
    }
  })

  // 输入循环结束，如果运算符栈不为空，循环输出
  while (operatorArr.length > 0) {
    outputArr.push(operatorArr.pop() as string)
  }

  return outputArr
}


function compute(leftNum: number, rightNum: number, operator: string): number {
  switch (operator) {
    case '-':
      return leftNum - rightNum
    case '*':
      return leftNum * rightNum
    case '/':
      return leftNum / rightNum
    case '+':
    default:
      return leftNum + rightNum
  }
}

function calculator(str: string) {
  const opArr: string[] = []
  let prevNumberChar = false
  // 字符串转换为中缀表达式
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    const curNumberChar = !char.match(/[\+\-\*\/\(\)]/g)
    if (curNumberChar && prevNumberChar) {
      opArr[opArr.length - 1] += char
    } else {
      opArr.push(char)
    }
    prevNumberChar = curNumberChar
  }

  const reversePolishArr = convert(opArr)

  const tmpArr: number[] = []

  reversePolishArr.forEach(input => {
    if (!Number.isNaN(Number(input))) {
      // 数字接直接push
      tmpArr.push(Number(input))
    } else {
      // 运算符
      const num1 = tmpArr.pop() as number
      const num2 = tmpArr.pop() as number

      if (isNaN(num1) || isNaN(num2)) {
        throw new Error(`无效的表达式：${reversePolishArr.join(',')}`)
      }

      tmpArr.push(compute(num2, num1, input))
    }
  })

  return Number(tmpArr[0].toFixed(3))
}

console.log(calculator('1+12+16/(2+2)*2-1'))
