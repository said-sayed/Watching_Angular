import { Component, OnInit } from '@angular/core';
import { GetMovieService } from '../get-movie.service';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  pageNum=5
  persons:any=[]
  imgSrc: string = "https://image.tmdb.org/t/p/w500/"
  value=""
  notfound="notfound"
  searchPerson:any=[]
  constructor(private _GetMovieService:GetMovieService , private _SearchService:SearchService) {
    this.personsPage(1)
   }
  personsPage(page:any){
    this._GetMovieService.forPerson(page).subscribe((data)=>{
      this.persons = data.results
    })
  }
  next(){
    this.pageNum++
    this.personsPage(this.pageNum)
  }
  prev(){
    this.pageNum--
    this.personsPage(this.pageNum)
  }
  page5(){
    this.pageNum=5
  }



  personSearch() {
    this.value
    if (this.value != "") {
      this._SearchService.personSearch(this.value).subscribe((data) => {
        this.searchPerson = data.results
        if (this.searchPerson != "") {
          this.searchPerson = data.results
        }
        else {
          this.searchPerson = this.notfound
        }
      })
    }

    else if(this.value == ""){
      this.personsPage(1)
    }

  }

  ngOnInit(): void {
  }

}
