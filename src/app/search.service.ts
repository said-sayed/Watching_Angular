import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _HttpClient:HttpClient) { }

  movieSearch(value:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=9e5fe6d5e8546919b797c151a62d402e&language=en-US&query=${value}&page=1&include_adult=false`)
  }
  tvSearch(value:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/tv?api_key=9e5fe6d5e8546919b797c151a62d402e&language=en-US&query=${value}&page=1&include_adult=false`)
  }

  personSearch(value:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/person?api_key=9e5fe6d5e8546919b797c151a62d402e&language=en-US&query=${value}&page=1&include_adult=false`)
  }

  multiSearch(value:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/multi?api_key=9e5fe6d5e8546919b797c151a62d402e&language=en-US&query=${value}&page=1&include_adult=false`)
  }


}
