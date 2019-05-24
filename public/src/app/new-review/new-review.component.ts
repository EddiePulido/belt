import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
    movie: any;
    newReview = {name:"", rating:0, comment: ""}

    constructor(private _route: ActivatedRoute, private _httpService: HttpService,private _router: Router) { }

    ngOnInit() {
        const obs = this._httpService.getOneParent(this._route.snapshot.paramMap.get("id"));
        obs.subscribe((data) => {
            this.movie = data['data'];
            console.log(this.movie,"Movieiohsdf");
        })
    }

    createReview(id){
        const obs = this._httpService.createReview(id,this.newReview);
        obs.subscribe((data) => {
            this._router.navigate(['/movies/' + id])
        })

        this._router.navigate(['/movies/' + id])
    }

}
