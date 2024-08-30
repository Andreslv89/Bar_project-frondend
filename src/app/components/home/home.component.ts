import { Component } from '@angular/core';
import { AnnouncementsComponent } from '../announcements/announcements.component';
import { ServicesComponent } from '../services/services.component';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AnnouncementsComponent, ServicesComponent, ContactsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
