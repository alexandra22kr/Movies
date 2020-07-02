import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  searchString: string = 'love';
  baseUrl: string = 'http://www.omdbapi.com/?apikey=2b04e489&s=';

  constructor(private http: Http) { }

  search(queryString: string) {
    let URL = this.baseUrl + queryString;
    return this.http.get(URL);
  }
}
