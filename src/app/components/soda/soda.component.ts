import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContactfooterComponent } from '../contacts/contactfooter/contactfooter.component';

@Component({
  selector: 'app-soda',
  standalone: true,
  imports: [NavbarComponent,ContactfooterComponent],
  templateUrl: './soda.component.html',
  styleUrl: './soda.component.css'
})
export class SodaComponent {

}
