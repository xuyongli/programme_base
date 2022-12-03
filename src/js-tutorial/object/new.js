function A(a) {
  this.a = a;
}

const _new = (...args) => {
  const constructor = args.shift();
  if (typeof constructor !== "function") throw Error("invalid constructor!");
  _new.target = constructor;
  const context = Object.create(constructor.prototype);
  const instance = constructor.apply(context, args);
  if (
    (typeof instance === "object" && instance !== null) ||
    typeof instance === "function"
  )
    return instance;
  return context;
};

console.log(_new(A, 1));
