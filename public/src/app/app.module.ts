import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./http.service";
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { NewReviewComponent } from './new-review/new-review.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    NewMovieComponent,
    NewReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
