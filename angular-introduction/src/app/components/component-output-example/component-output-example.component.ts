import { Component, Inject, inject } from '@angular/core';
import { EPerson, ManyPerson } from 'src/app/shared/interfaces/eperson';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { PersonTabComponent } from '../person-tab/person-tab.component'; 
import {
  Dialog,
  DialogRef,
  DIALOG_DATA,
  DialogModule,
} from '@angular/cdk/dialog';
// import { ComponentInputExampleComponent } from 'src/app/component-input-example/component-input-example.component';

@Component({
  selector: 'app-component-output-example',
  imports: [DialogModule ,SimpleDatatableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {
  manyPerson = ManyPerson;

  dialog = inject(Dialog);


  showPersonClicked(person: EPerson){
    console.log("Component Output", person);
    // alert(this.personTemplate(person));
    this.dialog.open(PersonDialogComponent, {
      data:person
    })
  }

  personTemplate(person: EPerson){
    return`
     Person Details

     First Name: ${person.givenName}
     Last Name: ${person.surName}
     Age: ${person.age}
     Email: ${person.email}
     Education: ${person.education}
     `
  }
}

@Component({
  imports: [],
  template: `
     <table class="table table-bordered w-50">
            <tr>
              <td class="fw-semibold text-end">First Name</td>
              <td class="ps-2">{{person.givenName}}</td>
            </tr>
            <tr>
              <td class="fw-semibold text-end">Last Name</td>
              <td class="ps-2">{{person.surName}}</td>
            </tr>
            <tr>
              <td class="fw-semibold text-end">Age</td>
              <td class="ps-2">{{person.age}}</td>
            </tr>
            <tr>
              <td class="fw-semibold text-end">Email</td>
              <td class="ps-2">{{person.email}}</td>
            </tr>
            <tr>
              <td class="fw-semibold text-end">Education</td>
              <td class="ps-2">{{person.education}}</td>
            </tr> 
           </table> 
  <button class="btn btn-primary btn-sm" (click)="DialogRef.close()">Close</button> 
  `,
  styles:[
    `
    :host {
      display:block;
      background:#fff;
      border-radius: 8px;
      padding: 16px;
      max-width: 500px;
    }
    
    `
  ]
})

export class PersonDialogComponent {
  DialogRef = inject(DialogRef);
  constructor(
    @Inject(DIALOG_DATA) public person: EPerson
  ){}
}
