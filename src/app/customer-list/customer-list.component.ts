import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

selectedCustomer: any;

customers:Customer[] = [
  {customerNo:1, name:'Mark', address:'', city:'London', country:'UK'},
  {customerNo:2, name:'benz', address:'', city:'Amsterdam', country:'UA'},
  {customerNo:3, name:'love', address:'', city:'Shanghai', country:'China'},
  {customerNo:4, name:'Spencer', address:'', city:'Hiroshima', country:'Japan'},
  {customerNo:5, name:'Maggi', address:'', city:'India', country:'Mumbai'},
];
}
