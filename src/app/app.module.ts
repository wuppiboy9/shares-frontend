import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// custom imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from './components/home/form-login/form-login.component';
import { FormChangelogComponent } from './components/home/form-changelog/form-changelog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormLoginComponent,
    FormChangelogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
