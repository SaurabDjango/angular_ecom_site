import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  user= {
    name:'',
    email:'',
    phone:'',
    address:''
  }
  sub() {
    console.log(this.user);
  }

  // constructor(private formBuilder: FormBuilder) {}
  }
