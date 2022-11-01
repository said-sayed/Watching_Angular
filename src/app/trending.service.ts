import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private _HttpClient:HttpClient) { }

  movieTrending():Observable<any>{
   return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=9e5fe6d5e8546919b797c151a62d402e")
  }

  tvTtrending():Observable<any>{
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/week?api_key=9e5fe6d5e8546919b797c151a62d402e")
   }

   personTrending():Observable<any>{
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/person/week?api_key=9e5fe6d5e8546919b797c151a62d402e")
   }


   movieDetails( type:any , id:any ):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=9e5fe6d5e8546919b797c151a62d402e&language=en-US`)
   }




}
