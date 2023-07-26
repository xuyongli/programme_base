function deepClone(obj: any, map = new WeakMap<Object>()): any {
    if (obj !== null && typeof obj === 'object') {
        if (Array.isArray(obj)) {
            return obj.map((val) => deepClone(val, map));
        }
        if (map.has(obj)) return map.get(obj);
        const clonedObj: any = {};
        map.set(obj, clonedObj);
        Object.keys(obj).forEach(key => {
            clonedObj[key] = deepClone(obj[key], map);
        });
        return clonedObj;
    } else {
        return obj;
    }
}

const target: any = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
};
target.target = target;

const clonedTarget = deepClone(target);
console.log(clonedTarget);
