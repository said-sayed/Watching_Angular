import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PersonComponent } from './person/person.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:"" , redirectTo:'home' , pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard] , component:HomeComponent},
  {path:"datails/:id/:type",canActivate:[AuthGuard] , component:DetailsComponent},
  {path:"movie" ,canActivate:[AuthGuard] , component:MovieComponent},
  {path:"contact" ,canActivate:[AuthGuard] , component:ContactComponent},
  {path:"person",canActivate:[AuthGuard]  , component:PersonComponent},
  {path:"tv" ,canActivate:[AuthGuard] , component:TvComponent},
  {path:"register"   , component:RegisterComponent},
  {path:"login"  , component:LoginComponent},
  {path:"**" , component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
