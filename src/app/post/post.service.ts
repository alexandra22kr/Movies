import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  constructor(private http: Http) { }

  searchMovieInfo(imdbID: string) {
    let URL = `http://www.omdbapi.com/?apikey=2b04e489&i=${imdbID}&plot=full`;
    return this.http.get(URL);
  }
}
