import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './main/home/home.component';
import { InsurancesComponent } from './main/insurances/insurances.component';

import { LegalInfoComponent } from './main/legal-info/legal-info.component';
import { FaqSectionComponent } from './main/faq-section/faq-section.component';
import { InsuranceFormComponent } from './main/insurance-form/insurance-form.component';
import { PaymentCallbackComponent } from './main/payment-callback/payment-callback.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsurancesComponent,
    LegalInfoComponent,
    FaqSectionComponent,
    InsuranceFormComponent,
    PaymentCallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    NgbTypeaheadModule, FormsModule, 
    JsonPipe,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
