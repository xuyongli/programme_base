// 简单的实现Promise.all
function myPromiseAll(promiseList: Promise<any>[]): Promise<any[]> {
    let len = promiseList.length;
    let result: any[] = new Array(len);
    return new Promise((resolve, reject) => {
        promiseList.forEach((promise, index) => promise.then((data) => {
            result[index] = data;
            if (len-- === 0) {
                resolve(result);
            }
        }).catch((error) => {
            reject(error);
        }));
    });
}
