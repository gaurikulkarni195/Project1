import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import{MatFormFieldModule}from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import{FlexLayoutModule} from '@angular/flex-layout';
import{ReactiveFormsModule} from '@angular/forms';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material';
import{MatListModule} from '@angular/material/list'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
