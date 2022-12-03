// 实现promise
function MyPromise(fn) {
  var state = "pending";
  var resolveCallback = null;
  var rejectCallback = null;
  var childResolve = null;
  var childReject = null;

  this.then = function (onResolved, onRejected) {
    if (state === "pending") {
      resolveCallback = onResolved;
      rejectCallback = onRejected;
    }

    return new MyPromise(function (resolve, reject) {
      childResolve = resolve;
      childReject = reject;
    });
  };

  this.resolve = function (value) {
    if (state === "pending") {
      if (resolveCallback) {
        var ret = resolveCallback(value);
        childResolve && childResolve(ret);
        state = "resolved";
      }
    }
  };

  this.reject = function (reason) {
    if (state === "pending") {
      if (rejectCallback) {
        var ret = rejectCallback(reason);
        childReject && childReject(ret);
        state = "rejected";
      }
    }
  };

  try {
    fn(this.resolve, this.reject);
  } catch (error) {
    this.reject(error);
  }
}

var demo = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("my first promise");
    } else {
      reject(new Error("test"));
    }
  }, 1000);
});

demo
  .then(
    (msg) => {
      console.log(msg);
      return "my second promise";
    },
    (error) => {
      console.log(error);
      return new Error("test2");
    }
  )
  .then(
    (msg) => {
      console.log(msg);
    },
    (error) => {
      console.log(error);
    }
  );
