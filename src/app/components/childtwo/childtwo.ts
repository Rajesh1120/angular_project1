import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childtwo',
  imports: [],
  templateUrl: './childtwo.html',
  styleUrl: './childtwo.css', 
  inputs:['a'],
  outputs:['nameEvent']
})
export class Childtwo {
a:any;
b:number=200;
myName:string="Rajesh"


nameEvent= new EventEmitter();
sendDatatoparent(){
  this.nameEvent.emit(this.myName)
}
}
