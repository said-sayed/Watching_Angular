import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SearchService } from '../search.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgSrc: string = "https://image.tmdb.org/t/p/w500/"
  value = ""
  notfound = "notfound"
  searchMulti: any = []
  arrayOfMovie: any = []
  arrayOfAllMovies: any = []
  arrayOfTv: any = []
  arrayOfPerson: any = []
  constructor(private _TrendingService: TrendingService, private _SearchService: SearchService) {
    this.movie()
    this.tv()
    this.person()
  }

  multiSearch() {
    this.value
    
    if (this.value != "") {
      this._SearchService.multiSearch(this.value).subscribe((data) => {
        this.searchMulti = data.results
        console.log(this.searchMulti);
        if (this.searchMulti != "") {
          this.searchMulti = data.results
        }
        else {
          this.searchMulti = this.notfound
        }
      })
    }
    else {
      this.movie()
      this.tv()
      this.person()
    }
  }

  movie() {
    this._TrendingService.movieTrending().subscribe((data) => {
      this.arrayOfMovie = data.results.slice(0, 10)
      this.arrayOfAllMovies = data.results
      console.log(data.results);
    })
  }

  tv() {
    this._TrendingService.tvTtrending().subscribe((data) => {
      this.arrayOfTv = data.results.slice(0, 10)
    })
  }

  person() {
    this._TrendingService.personTrending().subscribe((data) => {
      this.arrayOfPerson = data.results.slice(0, 10)
    })
  }

 
 




  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 0
      },
      400: {
        items: 6
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: true
  }






  ngOnInit(): void {
  }

}
