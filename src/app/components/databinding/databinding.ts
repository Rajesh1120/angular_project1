import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  username: string="Rajesh"

  flag : boolean = true
  toggleFlag(){
    this.flag=!this.flag
  }
  
}
