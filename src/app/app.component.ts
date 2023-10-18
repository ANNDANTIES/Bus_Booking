import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Atravels';
  from: string = '';
  to: string = '';
  journeyDate: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Additional initialization logic can go here
  }

  // submit() {
  //   // Assuming you've collected 'from', 'to', and 'journeyDate' from the form
  //   this.router.navigate(['/bus-listing'], {
  //     queryParams: {
  //       from: this.from,
  //       to: this.to,
  //       date: this.journeyDate
  //     }
  //   });
  // }
}
