import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
    @Output() childOutputVariable = new EventEmitter();
    
    sendBackToParent(){
        this.childOutputVariable.emit(true);
      }


    newMovie = {title:"", ratings:[]};
    newReview = {name:"",rating:0,comment:""}

    constructor(private _httpService: HttpService, private _router: Router) { }

    ngOnInit() {
    }

    createMovie(){
        console.log("Creating a new Movie");

        this.newMovie.ratings.push(this.newReview);


        const obs = this._httpService.createParent(this.newMovie);
        obs.subscribe((data) => {
            console.log("Successfully created Movie");
            this.sendBackToParent()
        })
    }

}
