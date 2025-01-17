import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {path:'inicio',component:MainComponent},
    {path:"" , redirectTo:'/inicio', pathMatch:'full'},
    {path: '**', redirectTo: '/inicio', pathMatch: 'full'}
];
