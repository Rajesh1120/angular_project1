import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-aboutus',
  imports: [RouterLink],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css'
})
export class Aboutus {
  constructor(private router: Router, private location: Location){}

  dosomething(){
    console.log("do something")
    this.router.navigate(['/home'])
  }

  goToPreviouspage(){
    this.location.back();
  }
  goToNextpage(){
    this.location.forward();
  }
}
