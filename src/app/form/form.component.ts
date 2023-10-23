import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Params } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  from: string = '';
  to: string = '';
  journeyDate: string = '';
  constructor(private router: Router) {}
  redirectToBusListing(pageName: string): void {
    // Implement the redirection logic here
    const queryParams:Params = {
      from: this.from,
      to: this.to,
      journeyDate: this.journeyDate,
    };
      this.router.navigate(['/bus-listing'], {queryParams});
    }
  }
