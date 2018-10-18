import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule } from '@angular/material';

const routes: Routes = [];

@NgModule({
  imports: [
  	BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
  	RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule
  ]
})
export class AppRoutingModule { }
