import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module'; // Import the HeroesModule
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    HeroesModule,
    AppRoutingModule, // Include HeroesModule in imports array
    RouterModule.forRoot(routes),
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
