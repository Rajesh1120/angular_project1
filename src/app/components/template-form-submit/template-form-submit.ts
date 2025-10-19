import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-submit',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-form-submit.html',
  styleUrl: './template-form-submit.css'
})
export class TemplateFormSubmit {


  
  registerUser={
    firstName:"",
    lastName:"",
    email:"",
    gender:"",
    comments:"",
    department:[],
    state:null
    
  }
  onChangeCheckbox(event:any){
    console.log(event.value)
  }
 
  onSubmit(registeredData:NgForm){
    console.log(registeredData.value)
  }

}
