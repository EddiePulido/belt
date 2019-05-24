import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
    movie:any = {title: "", ratings: []};

    constructor(private route: ActivatedRoute, private _httpService: HttpService,private _router: Router) { }

    ngOnInit() {
        this.getMovie();
    }

    getMovie(){
        const obs = this._httpService.getOneParent(this.route.snapshot.paramMap.get("id"));
        obs.subscribe((data) => {
            this.movie = data['data'];
            console.log("askljdf;laskdjfl;aksdjf")
        })
    }

    onDelete(id){
        const obs = this._httpService.deleteParent(id);
        obs.subscribe((data)=>{
            console.log("Movie Deleted")
            this._router.navigate(['/movies'])
        })
        this._router.navigate(['/movies'])
    }

    onDeleteReview(rid,mid){
        const obs = this._httpService.deleteReview(rid,mid);
        obs.subscribe((data)=>{
            console.log("Review Deleted");
            this.getMovie();
        })
    }

}
