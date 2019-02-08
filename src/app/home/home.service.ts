import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _httpClient: HttpClient) {
  }


  loadAjaxData() {

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Token', 'Abcd');

    // return this._httpClient.get('https://jsonplaceholder.typicode.com/users', {
    //   headers: headers
    // });


    return this._httpClient.post('https://reqres.in/api/users', {
      name: 'paul rudd',
      movies: ['I Love You Man', 'Role Models']
    }, {
      headers: headers
    });


  }

}
