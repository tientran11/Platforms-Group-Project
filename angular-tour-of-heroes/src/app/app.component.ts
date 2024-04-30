import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule} from '@angular/router';
import { RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  standalone: true,
  imports: [HeroesComponent, MessagesComponent, RouterModule, RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'Tour of Heroes';
}