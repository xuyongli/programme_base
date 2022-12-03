function A(a) {
  this.a = a;
}

function _create(obj) {
  const Fn = function () {};
  Fn.prototype = obj;
  return new Fn();
}

const a = new A(1);
console.log(_create(a) instanceof A);
