import { Component } from '@angular/core';
import { Largecomponents } from '../../componenets/largecomponents/largecomponents';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgComponentOutlet
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  largecomponent:any;
constructor(){ import ('../../componenets/largecomponents/largecomponents').then(m=> {
  this.largecomponent=m.Largecomponents
})
}
}
