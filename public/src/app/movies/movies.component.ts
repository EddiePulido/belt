import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    movies = [];
    addMovie: boolean;


    constructor(private _route:ActivatedRoute, private _httpService: HttpService,private _router: Router) { }

    ngOnInit() {
        this.getMovies();
    }

    getMovies(){
        const obs = this._httpService.getAllParents();
        obs.subscribe((data) => {
            this.movies = data['data']
        })
        this.addMovie = false;
    }

    onReviews(id){
        this._router.navigate(['/movies/' + id]);
    }

    onAdd(){
        this.addMovie = true;
    }

    onWrite(id){
        this._router.navigate(['/movies/'+ id + '/review'])
    }

    ReceivedChildMessage(event){
        this.getMovies();
    }

    getAvgRating(arr){
        var sum = 0;
        for(let i = 0;i<arr.length;i++){
            if(arr[i].rating != null){
                sum += arr[i].rating;
            }
        }
    
        return sum/arr.length;
      }
}
