import { Component, inject } from '@angular/core';
import { PersonTabComponent } from '../person-tab/person-tab.component'; 
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EpersonReactiveFormComponent } from '../eperson-reactive-form/eperson-reactive-form.component';
import { EPerson } from 'src/app/shared/interfaces/eperson';
// import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-reactive-form-example',
  standalone: true,
  imports: [
    PersonTabComponent,
    SimpleDatatableComponent,
    EpersonReactiveFormComponent
  ],
  templateUrl:  './reactive-form-example.component.html',
  styleUrl: './reactive-form-example.component.css'
})
export class ReactiveFormExampleComponent {
  // personService = inject(PersonService);
  currentPerson: EPerson | undefined;
  persons: EPerson[] = [];

  onPerson(data: EPerson){
    // console.log("Father", data);
    this.currentPerson = data;
    // this.persons.push(data);
    this.persons = [...this.persons, data]
    // this.personService.modifiedDataTable.set(true)
    // console.log("Father", this.persons)
  }
}