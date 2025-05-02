import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Person } from './shared/interfaces/person';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

}
