import { ViewAllAccountsComponent } from './pages/accounts/view/view-all-accounts/view-all-accounts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ViewAllShipmentsComponent } from './pages/shipments/view/view-all-shipments/view-all-shipments.component';
import { ViewShipmentDetailsComponent } from './pages/detailled-shipment/view/view-shipment-details/view-shipment-details.component';
import { SigninComponent } from './pages/signin/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'accounts', component: ViewAllAccountsComponent },
  { path: 'shipments', component: ViewAllShipmentsComponent },
  { path: 'shipment-details', component: ViewShipmentDetailsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
