import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ServicesComponent } from './components/services/services.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { ContactsComponent } from './components/contacts/contacts.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,CarouselComponent,AnnouncementsComponent,ServicesComponent,ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bar_project-frontend';
}
