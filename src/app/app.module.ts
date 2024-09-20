import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // تأكد من استيراد FormsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // إضافة FormsModule هنا
  ],
  providers: [],
  declarations: [AppComponent],
  imports: [CommonModule, FormsModule], // تأكد من إضافة FormsModule هنا
  bootstrap: [AppComponent]
})
export class AppModule { }
