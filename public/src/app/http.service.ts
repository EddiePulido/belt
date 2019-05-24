import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { }

    getAllParents(){
        return this._http.get("/allParents");
    }

    createParent(obj){
        return this._http.post("/newParent",obj);
    }

    deleteParent(id){
        console.log("HERE")
        return this._http.get("/parents/delete/" + id);
    }

    updateParent(id, body){
        return this._http.put("/parents/update/" + id, body);
    }

    getOneParent(id){
        return this._http.get("/oneParent/" + id);
    }

    deleteReview(cid,pid){
        return this._http.get("/child/delete/" +cid+'/'+pid)
    }

    createReview(id,obj){
        return this._http.post("/newChild/" + id,obj)
    }


}
