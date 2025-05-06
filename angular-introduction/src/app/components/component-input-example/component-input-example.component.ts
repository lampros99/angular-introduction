import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTabComponent } from '../person-tab/person-tab.component'; 

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTabComponent],
  templateUrl: './component-input-example.component.html',
  styleUrls: ['./component-input-example.component.css']
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Lampros',
    surName: 'Alexandris',
    age: 30,
    email: 'ale@aueb.gr',
    address: 'Athens, Greece'
  };

  person1: Person = {
    givenName: 'George',
    surName: 'Michail',
    age: 40,
    email: 'micha@aueb.gr',
    address: 'Kalamata, Greece'
  };
}
