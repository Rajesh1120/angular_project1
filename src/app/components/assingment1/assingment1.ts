import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assingment1',
  imports: [FormsModule],
  templateUrl: './assingment1.html',
  styleUrl: './assingment1.css'
})
export class Assingment1 {
  flag:boolean=true
  toggleButton(){
    this.flag=!this.flag
  }

  //2. remaining characters
  characters: string=""

  //3.drop down states
  states:string=""

  //4.arithmetic operations
  operations:string="+"
  num1 :number =20;
  num2 : number=10;
  result:number=0;

  arithmeticOp(){
    if (this.operations=="+"){
       this.result= this.num1 + this.num2
    }
    else if (this.operations=="-"){
      this.result= this.num1 - this.num2
   }
    else if (this.operations=="*"){
      this.result= this.num1 * this.num2
  }
    else{
      this.result= this.num1 / this.num2
    }

  }
  //5.
toggle: boolean =true;
textPassword(){
  this.toggle=!this.toggle
}
//6. 
count:number=0;
increment(){
  this.count+=1
}
decrement(){
  this.count-=1
}
reset(){
  this.count=0
}
//7.
isDark: boolean = false;   // starts in Light mode

toggleTheme() {
  this.isDark = !this.isDark;
}

//8.
celsius:number=0;
fahrenheit?:number;
converter(){
  this.fahrenheit=(this.celsius * (9/5))+32
}

}





