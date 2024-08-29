import { Routes } from '@angular/router';
import { ReserveComponent } from './components/reserve/reserve.component';
import { CandidateComponent } from './components/candidate/candidate.component';

export const routes: Routes = [
    {path:'reserve',component:ReserveComponent },
    {path:'candidate',component:CandidateComponent}
];
