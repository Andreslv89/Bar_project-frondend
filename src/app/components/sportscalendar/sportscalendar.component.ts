import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContactfooterComponent } from '../contacts/contactfooter/contactfooter.component';

@Component({
  selector: 'app-sportscalendar',
  standalone: true,
  imports: [NavbarComponent,ContactfooterComponent],
  templateUrl: './sportscalendar.component.html',
  styleUrl: './sportscalendar.component.css'
})
export class SportscalendarComponent {

}
