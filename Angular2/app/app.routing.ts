import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import components
import { AppComponent } from './Components/app.component';
import { DashboardComponent } from './Components/dashboard.component';
import { MainComponent } from './Components/main.component';
import { CvComponent } from './Components/cv.component';

const appRoutes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'CV', component: CvComponent },
    { path: '**', component: MainComponent },
    { path: '', component: MainComponent }
   // { path: 'TwitterAuthentication', component: TwitterComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
