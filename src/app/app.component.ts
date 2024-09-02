import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ServicesComponent } from './components/services/services.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SuscribeComponent } from './components/suscribe/suscribe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet,
  CarouselComponent,
  AnnouncementsComponent,ServicesComponent,
  ContactsComponent,SuscribeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bar_project-frontend';
}
