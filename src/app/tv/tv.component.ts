import { Component, OnInit } from '@angular/core';
import { GetMovieService } from '../get-movie.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  pageNum = 5
  tvs: any = []
  imgSrc: string = "https://image.tmdb.org/t/p/w500/"
  notfound = "notfound"
  value = ""
  searchTv: any = []
  constructor(private _GetMovieService: GetMovieService, private _SearchService: SearchService) {
    this.tvsPage(1)
  }
  tvsPage(page: any) {
    this._GetMovieService.forTv(page).subscribe((data) => {
      this.tvs = data.results
    })
  }
  next() {
    this.pageNum++
    this.tvsPage(this.pageNum)
  }
  prev() {
    this.pageNum--
    this.tvsPage(this.pageNum)
  }
  page5() {
    this.pageNum = 5
  }

  tvSearch() {
    this.value
    if (this.value != "") {
      this._SearchService.tvSearch(this.value).subscribe((data) => {
        this.searchTv = data.results
        if (this.searchTv != "") {
          this.searchTv = data.results
        }
        else {
          this.searchTv = this.notfound
        }
      })
    }

    else if(this.value == ""){
      this.tvsPage(1)
    }

  }

  ngOnInit(): void {
  }

}
