import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { NewMovieComponent } from './new-movie/new-movie.component';

const routes: Routes = [
    {path: 'movies', children:[
        {path: '', component: MoviesComponent},
        {path: ':id', children: [
            {path: '', component: MovieComponent},
            {path: 'review', component: NewReviewComponent}
        ]},
        {path: 'new', component: NewMovieComponent}
        
    ]},
    {path: '', pathMatch: 'full', redirectTo: '/movies'},
    {path: '**', redirectTo: '/movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
