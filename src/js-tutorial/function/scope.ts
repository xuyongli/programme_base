/**
 * JS编码闭包应用题
 * 使用JS实现一个repeat方法，function repeat (func, times, wait) {}，
 * const repeatFunc = repeat(alert, 4, 3000), 调用这个 repeatedFunc("hellworld")，会alert4次 helloworld, 每次间隔3秒
 */

function repeat (func: Function, times: number, wait: number) {
    return (...args: any[]) => {
        for (let index = 0; index < times; index++) {
            setTimeout(() => func(...args), wait * index);
        }
    }
}

const start = Date.now();
const repeatFunc = repeat((name: string) => {
    console.log(name, Date.now() - start);
}, 4, 3000);
repeatFunc('hellworld');
