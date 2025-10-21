import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css'
})
export class Contactus {

  formData={field1:"",field2:""}

  hasChanges: boolean = true;
  onSubmit(myform:any){
    
    this.hasChanges=false
  }
}
