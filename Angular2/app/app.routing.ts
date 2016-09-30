import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import components
import { AppComponent } from './Components/app.component';
import { HelloWorldComponent } from './Components/hello-world.component';

const appRoutes: Routes = [
    { path: 'main', component: AppComponent },
    { path: 'hello', component: HelloWorldComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
