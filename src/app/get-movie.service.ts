import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMovieService {

  constructor(private _HttpClient:HttpClient) { }

  forMovies(page:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=9e5fe6d5e8546919b797c151a62d402e&page=${page}`)
  }
  forTv(page:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=9e5fe6d5e8546919b797c151a62d402e&page=${page}`)
  }

  forPerson(page:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/person/week?api_key=9e5fe6d5e8546919b797c151a62d402e&page=${page}`)
  }

  favourite( type:any , id:any ):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=9e5fe6d5e8546919b797c151a62d402e&language=en-US`)
   }
}
