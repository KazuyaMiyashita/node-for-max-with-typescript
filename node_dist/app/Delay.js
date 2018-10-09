"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class Delay {
    constructor(interval_ms) {
        this.queue = [];
        this.subject = new rxjs_1.Subject();
        this.source = this.subject.asObservable();
        this.interval_ms = interval_ms;
    }
    getData() {
        return rxjs_1.interval(this.interval_ms).pipe(operators_1.map(() => {
            if (this.queue.length > 0) {
                return this.queue.shift();
            }
            else {
                return null;
            }
        }), operators_1.filter(data => data != null));
    }
    setData(as) {
        as.forEach(a => this.queue.push(a));
    }
}
exports.Delay = Delay;
//# sourceMappingURL=Delay.js.map