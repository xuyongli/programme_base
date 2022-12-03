function _instanceof(instance, parent) {
  const proto = parent.prototype;
  let classProtoType = instance.__proto__;
  while (true) {
    if (classProtoType === null) return false;
    if (classProtoType === proto) return true;
    classProtoType = classProtoType.__proto__;
  }
}

function Person() {}
function Hiuman() {}
const p = new Person();
console.log(_instanceof(p, Person));
console.log(_instanceof(p, Object));
console.log(_instanceof(p, Hiuman));
