import { Component } from '@angular/core';
import { AnnouncementsComponent } from '../announcements/announcements.component';
import { ServicesComponent } from '../services/services.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AnnouncementsComponent, ServicesComponent, ContactsComponent,CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
