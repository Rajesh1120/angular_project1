import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-demo1',
  imports: [ FormsModule ,JsonPipe],
  templateUrl: './template-form-demo1.html',
  styleUrl: './template-form-demo1.css'
})
export class TemplateFormDemo1 {
  user ={
    firstName: 'Yash',
    lastName: 'Nalmasa',
    email: 'yash@mail.com',
    address:{
      city: 'Hyderabad',
      state: 'Telangana',
      pinCode: 500009
    }    
  }
  submitMyForm(formObj:NgForm){
    console.log(formObj.value)

  }
 
}
