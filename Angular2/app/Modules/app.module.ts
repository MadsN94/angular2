import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Import components
import { AppComponent } from './../Components/app.component';
import { HelloWorldComponent } from './../Components/hello-world.component'; 

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, HelloWorldComponent],
    bootstrap: [AppComponent, HelloWorldComponent]
})
export class AppModule { }
