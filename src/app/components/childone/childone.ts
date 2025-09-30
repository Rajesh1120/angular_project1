import { Component } from '@angular/core';

@Component({
  selector: 'app-childone',
  imports: [],
  templateUrl: './childone.html',
  styleUrl: './childone.css',
  inputs:['a', 'b']
})
export class Childone {
  a:any;
  b:any;
}
