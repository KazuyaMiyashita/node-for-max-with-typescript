import { Delay } from './Delay';

export class Main {

  delay_ms: number;
  delay: Delay<any>;

  constructor(
    private maxNodeApi: any,
    private process: any
  ) {
    this.delay_ms = process.argv.length >= 3 ? Number(process.argv[2]) : 1000 // [ms]
    this.delay = new Delay<any>(this.delay_ms);

    maxNodeApi.addHandler("delay", (...args) => {
      this.delay.setData(args);
    });
  
    this.delay.getData().subscribe(data => {
      maxNodeApi.outlet(data);
    });
  }

}