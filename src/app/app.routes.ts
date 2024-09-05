import { Routes } from '@angular/router';
import { ReserveComponent } from './components/reserve/reserve.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { HomeComponent } from './components/home/home.component';
import { SuscribeComponent } from './components/suscribe/suscribe.component';
import { BeersComponent } from './components/beers/beers.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full' },
    {path:'reserve',component:ReserveComponent },
    {path:'candidate',component:CandidateComponent},
    {path: 'home', component: HomeComponent },
    {path:'suscribe',component:SuscribeComponent},
    {path:'beers',component:BeersComponent}

];
