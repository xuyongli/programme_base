function A() {}
function B() {}

function _extends(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  Child.__proto__ = Parent;
}

_extends(A, B);

var a = new A();
console.log(a instanceof A);
console.log(a instanceof B);
