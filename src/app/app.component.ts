import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,ContainerComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bar_project-frontend';
}
