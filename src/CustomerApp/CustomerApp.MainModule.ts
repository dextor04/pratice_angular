import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerComponent } from './Customer/CustomerApp.Customercomponent';
import { FormsModule } from '@angular/forms';
import { SupplierComponent } from './Supplier/CustomerApp.SupplierComponent';
import { HomeComponent } from './Home/CustomerApp.HomeComponent';
import { MasterPageComponent } from './Home/CustomerApp.MasterPageComponent';
import { RouterModule } from '@angular/router';
import { MainRoutes } from './Routing/CustomerApp.MainRouting';
@NgModule({
  declarations: [
    CustomerComponent,
    SupplierComponent,
    HomeComponent,
    MasterPageComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(MainRoutes)],
  bootstrap: [MasterPageComponent],
})
export class CustomerModule {}
