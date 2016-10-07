import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import components
import { AppComponent } from './Components/app.component';
import { DashboardComponent } from './Components/dashboard.component';
//import { TwitterComponent } from './Components/twitter.component';

const appRoutes: Routes = [
    { path: 'main', component: AppComponent },
    { path: 'dashboard', component: DashboardComponent }
   // { path: 'TwitterAuthentication', component: TwitterComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
