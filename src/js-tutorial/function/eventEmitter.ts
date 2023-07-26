interface IListener {
    callback: Function;
    context?: Object;
    once?: boolean;
}

class EventEmitter {
    private map: Map<string, IListener[]> = new Map();

    public on(name: string, callback: Function, context?: any, once?: boolean) {
        let listeners = this.map.get(name);
        if (!listeners) {
            listeners = [];
            this.map.set(name, listeners);
        }
        listeners.push({
            callback,
            context,
            once,
        });
    }

    public once(name: string, callback: Function, context?: any) {
        this.on(name, callback, context, true);
    }

    public off(name: string, callback: Function) {
        let listeners = this.map.get(name);
        if (!listeners) return;
        listeners = listeners.filter(listener => listener.callback !== callback);
        this.map.set(name, listeners);
    }

    public emit(name: string, ...args: any[]) {
        const listeners = this.map.get(name);
        if (!listeners) return;
        listeners.slice().forEach(({ callback, context, once }) => {
            callback.apply(context, args);
            if (once) this.off(name, callback);
        });
    }
}

const emitter = new EventEmitter();
const callback = (...args: any) => console.log(...args);

emitter.on('test', callback);
emitter.emit('test', '1');
// '1'

emitter.off('test', callback);
emitter.emit('test', '1');
// 

emitter.once('test', callback);
emitter.emit('test', '2');
emitter.emit('test','3');
// '2'
