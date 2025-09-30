import { Component } from '@angular/core';
import { Childone } from '../childone/childone';
import { Childtwo } from '../childtwo/childtwo';

@Component({
  selector: 'app-parentdemo',
  imports: [Childone, Childtwo],
  templateUrl: './parentdemo.html',
  styleUrl: './parentdemo.css'
})
export class Parentdemo {
a:number =22;
parentName:string="";
receiveDataFromChild(data:any){
this.parentName=data
}
}
