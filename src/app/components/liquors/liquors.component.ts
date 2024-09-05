import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContactfooterComponent } from '../contacts/contactfooter/contactfooter.component';

@Component({
  selector: 'app-liquors',
  standalone: true,
  imports: [NavbarComponent,ContactfooterComponent],
  templateUrl: './liquors.component.html',
  styleUrl: './liquors.component.css'
})
export class LiquorsComponent {

}
