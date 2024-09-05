import { Routes } from '@angular/router';
import { ReserveComponent } from './components/reserve/reserve.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { HomeComponent } from './components/home/home.component';
import { SuscribeComponent } from './components/suscribe/suscribe.component';
import { BeersComponent } from './components/beers/beers.component';
import { ContactfooterComponent } from './components/contacts/contactfooter/contactfooter.component';

export const routes: Routes = [
    {path:'reserve',component:ReserveComponent },
    {path:'candidate',component:CandidateComponent},
    {path: 'home', component: HomeComponent },
    {path:'suscribe',component:SuscribeComponent},
    {path:'beers',component:BeersComponent},
];
