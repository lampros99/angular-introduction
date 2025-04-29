<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, Input } from '@angular/core';
import { Person } from 'src/app/shared./interfaces/person'; 
>>>>>>> 251ea01 (initial commit)

@Component({
  selector: 'app-person-tab',
  imports: [],
  templateUrl: './person-tab.component.html',
  styleUrl: './person-tab.component.css'
})
export class PersonTabComponent {
<<<<<<< HEAD
=======
  @Input() personInput: Person | undefined;
  
>>>>>>> 251ea01 (initial commit)
  name = "Thanasis"

  person = {
    givenName:"Thanasis",
    surname:"Androutsos",
    age:20,
    email:"androu@aueb.gr"
  }
}
