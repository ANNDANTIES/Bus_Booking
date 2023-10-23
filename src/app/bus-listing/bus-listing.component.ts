import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bus-listing',
  templateUrl: './bus-listing.component.html',
  styleUrls: ['./bus-listing.component.css']
})

export class BusListingComponent implements OnInit {
  from: string='';
  to: string='';
  journeyDate: string='';
  busName: string='';
  busType: string='';
  fare: string='';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the selected values from route parameters
    this.from = this.route.snapshot.queryParamMap.get('from')?? '';
    this.to = this.route.snapshot.queryParamMap.get('to')?? '';
    this.journeyDate = this.route.snapshot.queryParamMap.get('journeyDate')?? '';

    // You can set bus details here based on your application logic
    this.busName = 'Sample Bus';
    this.busType = 'AC Sleeper';
    this.fare = '$50.00'; // Update with actual fare
  }
}

// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-bus-listing',
//   templateUrl: './bus-listing.component.html',
//   styleUrls: ['./bus-listing.component.css']
// })
// export class BusListingComponent implements OnInit {
//   journeyDate: string = '';
//   from: string = '';
//   to: string = '';
//   availableBuses: any[] = [];
//   constructor(private route: ActivatedRoute) { }

//   ngOnInit() {
//     // Access query parameters using ActivatedRoute
//     this.journeyDate = this.route.snapshot.queryParams['date'];
//     this.from = this.route.snapshot.queryParams['from'];
//     this.to = this.route.snapshot.queryParams['to'];

//     // Fetch available buses and assign them to this.availableBuses
//     // You might need to fetch data from a service or API and assign it here
//     // Example:
//     this.availableBuses = this.fetchAvailableBuses();
//   }

//   fetchAvailableBuses() {
//     // Fetch available buses from a service or API
//     // Example data for demonstration:
//     return [
//       { name: 'Bus 1', departureTime: '8:00 AM', price: '$20' },
//       { name: 'Bus 2', departureTime: '10:00 AM', price: '$25' },
//       // Add more bus details as needed
//     ];
//   }
// }
