import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ManagebookingComponent} from './pages/managebooking/managebooking.component';
import {BusListingComponent} from './bus-listing/bus-listing.component';  


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'managebooking',component:ManagebookingComponent},
  {path: 'form', component: FormComponent },
  {path: 'bus-listing', component: BusListingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
