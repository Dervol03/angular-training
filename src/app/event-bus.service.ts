import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

interface EventBusArgs {
  eventType: string;
  data: any;
}

export class EventBusService {
  private messages$ = new Subject<EventBusArgs>();


  emit(eventType: string, data: any): void {
    this.messages$.next({eventType, data});
  }

  observe(eventType: string): Observable<any> {
    return this.messages$
               .filter((message) => message.eventType === eventType)
               .map((message) => message.data);
  }
}
