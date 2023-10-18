import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BusListingComponent } from './bus-listing/bus-listing.component';

@NgModule({
  declarations: [
    AppComponent,
   // BusListingComponent
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
