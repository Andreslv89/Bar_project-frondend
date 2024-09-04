import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContactfooterComponent } from '../contacts/contactfooter/contactfooter.component';

@Component({
  selector: 'app-beers',
  standalone: true,
  imports: [NavbarComponent,ContactfooterComponent],
  templateUrl: './beers.component.html',
  styleUrl: './beers.component.css'
})
export class BeersComponent {

}
