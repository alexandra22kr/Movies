import { Component, OnInit } from '@angular/core';

import IPost from './IPost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [
    {
      Title: "Crazy, Stupid, Love.",
      Year: "2011",
      imdbID: "tt1570728",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
