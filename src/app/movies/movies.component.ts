import { Component, OnInit } from "@angular/core";
import { SearchService } from "./search.service";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, filter } from "rxjs/operators";
import "rxjs/add/operator/switchMap";
import { NgxSpinnerService } from "ngx-spinner";

import IPost from "./IPost";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent implements OnInit {
  nothingFound: boolean = false;
  posts: IPost[] = [];
  queryField: FormControl = new FormControl();
  constructor(
    private _apiService: SearchService,
    private SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.nothingFound = false;
    this.queryField.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        filter((v) => v.trim())
      )
      .switchMap((query) => {
        this.SpinnerService.show();
        return this._apiService.search(query);
      })
      .subscribe(
        (result) => {
          if (result.json().Search) {
            this.nothingFound = false;
            this.posts = Array.from(result.json().Search);
          } else this.nothingFound = true;
          this.SpinnerService.hide();
        },
        (error) => {
          console.log("error", error);
          this.nothingFound = true;
          this.SpinnerService.hide();
        }
      );
  }
}
