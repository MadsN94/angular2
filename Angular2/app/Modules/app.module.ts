import { NgModule } from '@angular/core';
import { routing, appRoutingProviders} from '../app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Import components
import { AppComponent } from './../Components/app.component';
import { WeatherComponent } from './../Components/weather.component'; 
import { TwitterComponent } from './../Components/twitter.component';
import { DashboardComponent } from './../Components/dashboard.component';

@NgModule({
    imports: [BrowserModule, routing, FormsModule, HttpModule],
    declarations: [AppComponent, WeatherComponent, TwitterComponent, DashboardComponent],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }
