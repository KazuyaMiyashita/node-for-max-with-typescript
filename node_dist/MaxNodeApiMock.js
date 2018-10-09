"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
class MaxNodeApiMock {
    constructor(process) {
        this.handlerMap = new Map();
        console.log('**maxNodeApiMock** - exit to Ctrl-D & Ctrl-C');
        let reader = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        reader.on('line', (line) => {
            let strs = line.split(' ');
            if (strs.length >= 1) {
                let key = strs[0];
                let args = strs.slice(1);
                if (this.handlerMap.has(key)) {
                    this.handlerMap.get(key).apply(this, args);
                }
                else {
                    console.log('Unhandled Message: ' + key);
                }
            }
        });
    }
    addHandler(messageTypes, callback) {
        this.handlerMap.set(messageTypes, callback);
    }
    outlet(arg) {
        console.log(arg);
    }
    post(arg) {
        console.log(arg);
    }
}
exports.MaxNodeApiMock = MaxNodeApiMock;
//# sourceMappingURL=MaxNodeApiMock.js.map