import { Component, OnInit } from "@angular/core";
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { Http } from '@angular/http';
import "rxjs/add/operator/switchMap";

import IPostInfo from "./IPostInfo";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  post: IPostInfo;

  id: string = '';
  private routeSubscription: Subscription;

  constructor(private http: Http, private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
  }

  ngOnInit(): void {
    let URL = `http://www.omdbapi.com/?apikey=2b04e489&i=${this.id}&plot=full`;
    this.http.get(URL).subscribe((data: any) => {
      this.post = data.json();
    });
  }
}
