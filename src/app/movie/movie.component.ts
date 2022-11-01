import { Component, OnInit } from '@angular/core';
import { GetMovieService } from '../get-movie.service';
import { SearchService } from '../search.service';


GetMovieService

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: any = []
  imgSrc: string = "https://image.tmdb.org/t/p/w500/"
  page = 5;
  value = ""
  notfound = "notfound"
  searchMovie: any = []
  constructor(private _GetMovieService: GetMovieService, private _SearchService: SearchService) {
    this.moviesPage(1)
  }
  movieSearch() {
    this.value
    if (this.value != "") {
      this._SearchService.movieSearch(this.value).subscribe((data) => {
        this.searchMovie = data.results
        if (this.searchMovie != "") {
          this.searchMovie = data.results
        }
        else {
          this.searchMovie = this.notfound
        }
      })
    }

    else if (this.value == "") {
      this.moviesPage(1)
    }




  }



  moviesPage(page: any) {
    this._GetMovieService.forMovies(page).subscribe((data) => {
      this.movies = data.results
    })
  }
  next() {
    this.page++
    this.moviesPage(this.page)
  }
  prev() {
    this.page--
    this.moviesPage(this.page)
  }
  page5() {
    this.page = 5
  }

  ngOnInit(): void {
  }

}
