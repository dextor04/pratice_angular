import { Component } from '@angular/core';
import { Customer } from '../CustomerApp.model';
@Component({
  templateUrl: './CustomerApp.CustomerView.html',
})
export class CustomerComponent {
  title = 'my-project';
  CustomerModel: Customer = new Customer();
  OnRegister() {
    console.log(this.CustomerModel);
  }
  CustomerModels: Array<Customer> = new Array<Customer>();
  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer(); //clear the UI elements
  }
}
