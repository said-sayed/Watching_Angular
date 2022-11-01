import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PersonComponent } from './person/person.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:"" , redirectTo:'HomeComponent' , pathMatch:"full"},
  {path:"home" , component:HomeComponent},
  {path:"about" , component:AboutComponent},
  {path:"movie" , component:MovieComponent},
  {path:"person" , component:PersonComponent},
  {path:"tv" , component:TvComponent},
  {path:"register" , component:RegisterComponent},
  {path:"login" , component:LoginComponent},
  {path:"**" , component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
