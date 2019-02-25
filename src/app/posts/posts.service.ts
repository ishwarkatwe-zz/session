import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _httpClient: HttpClient) {
  }

  fetchData() {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
