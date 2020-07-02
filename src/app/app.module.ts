import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { PostComponent } from "./post/post.component";
import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { MoviesComponent } from "./movies/movies.component";
import { SearchService } from "./movies/search.service";
import { PostService } from "./post/post.service";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "movies",
    component: MoviesComponent,
    // canActivateChild: [CanActivateTeam],
    children: [{ path: ":id/info", component: PostComponent }],
  },
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
  ],
  providers: [SearchService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
