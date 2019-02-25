import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) {
  }

  public auth() {
    // return this.http.get('https://jsonplaceholder.typicode.com/users');
    return this.http.post('http://demo5910315.mockable.io/login', {});
  }
}
