import { Observable, Subject, of, merge, zip, interval } from 'rxjs';
import { map, tap, filter, first, flatMap, startWith, throttleTime, debounceTime, delay, sample } from 'rxjs/operators';

export class Delay<T> {

  private interval_ms: number;

  private queue: T[] = [];
  private subject = new Subject<T>();
  private source = this.subject.asObservable();

  constructor(interval_ms: number) {
    this.interval_ms = interval_ms;
  }

  public getData(): Observable<T> {
    return interval(this.interval_ms).pipe(
      map(() => {
        if (this.queue.length > 0) {
          return this.queue.shift();
        } else {
          return null;
        }
      }),
      filter(data => data != null)
    );
  }

  public setData(as: Array<T>): void {
    as.forEach(a => this.queue.push(a));
  }




}