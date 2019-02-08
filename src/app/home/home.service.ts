import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _httpClient: HttpClient) {
  }

  loadAjaxData() {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

}
