"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Delay_1 = require("./Delay");
class Main {
    constructor(maxNodeApi, process) {
        this.maxNodeApi = maxNodeApi;
        this.process = process;
        this.delay_ms = process.argv.length >= 3 ? Number(process.argv[2]) : 1000; // [ms]
        this.delay = new Delay_1.Delay(this.delay_ms);
        maxNodeApi.addHandler("delay", (...args) => {
            this.delay.setData(args);
        });
        this.delay.getData().subscribe(data => {
            maxNodeApi.outlet(data);
        });
    }
}
exports.Main = Main;
//# sourceMappingURL=Main.js.map