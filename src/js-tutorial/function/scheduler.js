// 并发请求限制
class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.running = 0;
  }

  add(callback) {
    this.queue.push(callback);
    this.run();
  }

  run() {
    while (this.running < this.limit && this.queue.length) {
      const callback = this.queue.shift();
      callback().then(() => {
      }).catch(() => {
      }).finally(() => {
        this.running--;
        this.run();
      });
      this.running++;
    }
  }
}

const start = Date.now();

// 异步任务函数
const fetchUser = (name, delay) => {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log(name, delay, Date.now() - start);
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
