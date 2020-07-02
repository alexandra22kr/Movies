import { Component, OnInit } from "@angular/core";
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl } from "@angular/forms";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
} from "rxjs/operators";
import "rxjs/add/operator/switchMap";

import IPostInfo from "./IPostInfo";
import { PostService } from './post.service';

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  post: IPostInfo = {
    Title: "Crazy, Stupid, Love.",
    Year: "2011",
    Rated: "PG-13",
    Released: "29 Jul 2011",
    Runtime: "118 min",
    Genre: "Comedy, Drama, Romance",
    Director: "Glenn Ficarra, John Requa",
    Writer: "Dan Fogelman",
    Actors: "Steve Carell, Ryan Gosling, Julianne Moore, Emma Stone",
    Plot:
      "Cal (Steve Carell) and Emily (Julianne Moore) have the perfect life together living the American dream... until Emily asks for a divorce. Now Cal, Mr Husband, has to navigate the single scene with a little help from his professional bachelor friend Jacob Palmer (Ryan Gosling). Make that a lot of help...",
    Language: "English",
    Country: "USA",
    Awards: "Nominated for 1 Golden Globe. Another 3 wins & 22 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.4/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "79%",
      },
      {
        Source: "Metacritic",
        Value: "68/100",
      },
    ],
    Metascore: "68",
    imdbRating: "7.4",
    imdbVotes: "459,394",
    imdbID: "tt1570728",
    Type: "movie",
    DVD: "01 Nov 2011",
    BoxOffice: "$83,300,000",
    Production: "Warner Bros. Pictures",
    Website: "N/A",
    Response: "True",
  };

  id: string = 'tt4154756';
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private _apiService: PostService) {
    this.routeSubscription = route.params.subscribe(
      (params) => (this.id = params["id"])
    );
  }

  ngOnInit(): void {
    // console.log('post comp');
    // this._apiService.searchMovieInfo('tt4154756').subscribe((data: any) => {
    //   console.log('pooost: ', data);
    //   this.post = data;
    // });
  }
}
