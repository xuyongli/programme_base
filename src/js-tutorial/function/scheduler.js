class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.running = [];
    this.isRunning = false;
  }

  add(callback) {
    this.queue.push(callback);
    this.run();
  }

  run() {
    while (this.running.length < this.limit && this.queue.length) {
      const callback = this.queue.shift();
      const promise = callback();
      promise.then(() => {
        const idx = this.running.indexOf(promise);
        idx > -1 && this.running.splice(idx, 1);
        this.run();
      });
      this.running.push(promise);
    }
  }
}
// 异步任务函数
const fetchUser = (name, delay) => {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log(name);
        resolve();
      }, delay);
    });
};

const scheduler = new Scheduler(2); // 控制并发数 2

scheduler.add(fetchUser("A", 2000));
scheduler.add(fetchUser("B", 1000));
scheduler.add(fetchUser("C", 800));
scheduler.add(fetchUser("D", 500));
// 打印顺序: B C A D
