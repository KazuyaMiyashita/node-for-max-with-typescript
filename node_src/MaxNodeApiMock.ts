import * as readline from 'readline';

export class MaxNodeApiMock {

  private handlerMap = new Map<string, any>();

  constructor(process: any) {
    console.log('**maxNodeApiMock** - exit to Ctrl-D & Ctrl-C');

    let reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    reader.on('line', (line: string) => {
      let strs: string[] = line.split(' ');
      if (strs.length >= 1) {
        let key = strs[0];
        let args = strs.slice(1);
        if (this.handlerMap.has(key)) {
          this.handlerMap.get(key).apply(this, args);
        } else {
          console.log('Unhandled Message: ' + key);
        }
      }
    });
  }

  public addHandler(messageTypes: string, callback: (a: any[]) => {}): void {
    this.handlerMap.set(messageTypes, callback);
  }

  public outlet(arg: any) {
    console.log(arg);
  }

  public post(arg: any) {
    console.log(arg);
  }

}