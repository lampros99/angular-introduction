import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTabComponent } from './components/person-tab/person-tab.component';


import { Person } from './shared./interfaces/person';

@Component({
  selector: 'app-root',
  imports: [PersonTabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Markos';
  // Step 1: One way binding of data

  person = {
    givenName: 'Markos',
    surName: 'Karampatsis',
    age:52,
    email: 'marka@aueb.gr'
  }
  // Step 3: Component Input
  person0: Person = {
    givenName: "Christodoulos",
    surName: "Fragkoudakis",
    age: 55,
    email: "chrag@aueb.gr",
    address: "Athens, Greece"
  }
  person1: Person = {
    givenName: "John",
    surName: "Doe",
    age: 32,
    email: "john@aueb.gr",
    address: "Patmos, Greece"
  }
}
