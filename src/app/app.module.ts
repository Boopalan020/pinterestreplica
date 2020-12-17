import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavlogoComponent } from './components/navlogo/navlogo.component';
import { NavrightComponent } from './components/navright/navright.component';
import { BodycontentComponent } from './components/bodycontent/bodycontent.component';
import { AbuttonComponent } from './components/abutton/abutton.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavlogoComponent,
    NavrightComponent,
    BodycontentComponent,
    AbuttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
