import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

import {BusListingComponent} from './bus-listing/bus-listing.component';  
const routes: Routes = [
  { path: 'form', component: FormComponent },
  {path: 'bus-listing', component: BusListingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
