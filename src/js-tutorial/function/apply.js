// 浏览器环境 非严格模式
function getGlobalObject() {
  return this;
}
function generateFunctionCode(argsArrayLength) {
  var code = "return arguments[0][arguments[1]](";
  for (var i = 0; i < argsArrayLength; i++) {
    if (i > 0) {
      code += ",";
    }
    code += "arguments[2][" + i + "]";
  }
  code += ")";
  // return arguments[0][arguments[1]](arg1, arg2, arg3...)
  return code;
}
Function.prototype.applyFn = function apply(thisArg, argsArray) {
  // `apply` 方法的 `length` 属性是 `2`。
  // 1.如果 `IsCallable(func)` 是 `false`, 则抛出一个 `TypeError` 异常。
  if (typeof this !== "function") {
    throw new TypeError(this + " is not a function");
  }
  // 2.如果 argArray 是 null 或 undefined, 则
  // 返回提供 thisArg 作为 this 值并以空参数列表调用 func 的 [[Call]] 内部方法的结果。
  if (typeof argsArray === "undefined" || argsArray === null) {
    argsArray = [];
  }
  // 3.如果 Type(argArray) 不是 Object, 则抛出一个 TypeError 异常 .
  if (argsArray !== new Object(argsArray)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  if (typeof thisArg === "undefined" || thisArg === null) {
    // 在外面传入的 thisArg 值会修改并成为 this 值。
    // ES3: thisArg 是 undefined 或 null 时它会被替换成全局对象 浏览器里是window
    thisArg = getGlobalObject();
  }
  // ES3: 所有其他值会被应用 ToObject 并将结果作为 this 值，这是第三版引入的更改。
  thisArg = new Object(thisArg);
  var __fn = "__" + new Date().getTime();
  // 万一还是有 先存储一份，删除后，再恢复该值
  var originalVal = thisArg[__fn];
  // 是否有原始值
  var hasOriginalVal = thisArg.hasOwnProperty(__fn);
  thisArg[__fn] = this;
  // 9.提供 `thisArg` 作为 `this` 值并以 `argList` 作为参数列表，调用 `func` 的 `[[Call]]` 内部方法，返回结果。
  // ES6版
  // var result = thisArg[__fn](...args);
  var code = generateFunctionCode(argsArray.length);
  var result = new Function(code)(thisArg, __fn, argsArray);
  delete thisArg[__fn];
  if (hasOriginalVal) {
    thisArg[__fn] = originalVal;
  }
  return result;
};

Function.prototype.callFn = function call(thisArg) {
  var argsArray = [];
  var argumentsLength = arguments.length;
  for (var i = 0; i < argumentsLength - 1; i++) {
    // argsArray.push(arguments[i + 1]);
    argsArray[i] = arguments[i + 1];
  }
  console.log("argsArray:", argsArray);
  return this.applyFn(thisArg, argsArray);
};

// 测试例子
var doSth = function (name, age) {
  var type = Object.prototype.toString.call(this);
  console.log(typeof doSth);
  console.log(this === firstArg);
  console.log("type:", type);
  console.log("this:", this);
  console.log("args:", [name, age], arguments);
  return "this--";
};

var name = "window";

var student = {
  name: "123",
  age: 18,
  doSth: "doSth",
  __fn: "doSth",
};
var firstArg = student;
var result = doSth.applyFn(firstArg, [1, { name: "Rowboat" }]);
var result2 = doSth.callFn(firstArg, 1, { name: "Rowboat" });
console.log("result:", result);
console.log("result2:", result2);
