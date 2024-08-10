import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog'

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JsonFormComponent } from './json-form/json-form.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'home', component: HomeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
