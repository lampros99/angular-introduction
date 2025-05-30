import { Component, Input } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
// import { EventBindExampleComponent } from "../event-bind-example/event-bind-example.component"; 
import { EPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-person-tab',
  standalone: true,
  imports: [],
  templateUrl: './person-tab.component.html',
  styleUrl: './person-tab.component.css'
})
export class PersonTabComponent {
  @Input() personInput: Person | EPerson | undefined;  

  name = "Thanasis"

  // person = {
  //   givenName:"Thanasis",
  //   surname:"Androutsos",
  //   age:20,
  //   email:"androu@aueb.gr",
  // }
addressOReducation: any;
  isPerson():boolean {
    if(this.personInput && 'address' in this.personInput){
      this.addressOReducation = this.personInput.address
    return 'address' in this.personInput;
    }
     return false;
  }
 
  isEPerson():boolean {
    if(this.personInput && 'education' in this.personInput){
      this.addressOReducation = this.personInput.education
      return 'aducation'in this.personInput;
    }
    return false;
  }
}
