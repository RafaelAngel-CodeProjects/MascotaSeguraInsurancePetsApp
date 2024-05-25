import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { InsurancesComponent } from './main/insurances/insurances.component';
import { PaymentCallbackComponent } from './main/payment-callback/payment-callback.component';

const routes: Routes = [
  { path: 'payment-callback', component: PaymentCallbackComponent },
  { path: 'main', component: HomeComponent},
  { path: 'about', component: InsurancesComponent }
  // { path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
