import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public state = new BehaviorSubject('');
  constructor() {
  }

  setData(data) {
    return this.state.next(data);
  }
}
