import { NgModule } from '@angular/core';
import { routing, appRoutingProviders} from '../app.routing';
import { BrowserModule } from '@angular/platform-browser';

//Import components
import { AppComponent } from './../Components/app.component';
import { HelloWorldComponent } from './../Components/hello-world.component'; 
import { WeatherComponent } from './../Components/weather.component'; 

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, HelloWorldComponent, WeatherComponent],
    providers: [appRoutingProviders],
    bootstrap: [ WeatherComponent]
})
export class AppModule { }
