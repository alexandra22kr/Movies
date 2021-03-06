import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from "./app.component";
import { PostComponent } from "./post/post.component";
import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { MoviesComponent } from "./movies/movies.component";
import { SearchService } from "./movies/search.service";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "movies", component: MoviesComponent },
  { path: "movies/:id/info", component: PostComponent },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent,
    NotfoundComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
