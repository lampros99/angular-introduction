import { Component, Input } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { EventBindExampleComponent } from "../event-bind-example/event-bind-example.component"; 

@Component({
  selector: 'app-person-tab',
  standalone: true,
  imports: [EventBindExampleComponent],
  templateUrl: './person-tab.component.html',
  styleUrl: './person-tab.component.css'
})
export class PersonTabComponent {

  @Input() personInput: Person | undefined;  

  name = "Thanasis"

  person = {
    givenName:"Thanasis",
    surname:"Androutsos",
    age:20,
    email:"androu@aueb.gr",
  }
}
