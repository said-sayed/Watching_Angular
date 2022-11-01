import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:string="";
  type:string=""
  movieDetails:any =[]
  imgSrc:string="https://image.tmdb.org/t/p/w500/"
  imageMe="../../assets/pp.jfif"

  constructor(private _ActivatedRoute:ActivatedRoute , private _TrendingService:TrendingService) {
    this.id =  _ActivatedRoute.snapshot.params.id;
    this.type =  _ActivatedRoute.snapshot.params.type;
    _TrendingService.movieDetails(this.type , this.id).subscribe((data)=>{

      this.movieDetails=data
      console.log(this.movieDetails);
      

    })
   }

  ngOnInit(): void {
  }

}
