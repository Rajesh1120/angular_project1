import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modeldriven-form',
  imports: [ReactiveFormsModule],
  templateUrl: './modeldriven-form.html',
  styleUrl: './modeldriven-form.css'
})
export class ModeldrivenForm {
  registerForm!: FormGroup ;
  constructor(){
    this.registerForm=new FormGroup(({
      firstname: new FormControl(),
      lastname:new FormControl(),
      email:new FormControl(),
      address:new FormControl({
        city:new FormControl(),
        state:new FormControl(),
        pincode:new FormControl()
      }),

    }))
  }
  ngOnInit(){

  }
}
