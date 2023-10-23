import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BusListingComponent } from '../app/bus-listing/bus-listing.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ManagebookingComponent } from './pages/managebooking/managebooking.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
   FormComponent,
   BusListingComponent,
   NavbarComponent,
   FooterComponent,
   HomeComponent,
   ManagebookingComponent,
   ContactComponent,
   AboutComponent
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
