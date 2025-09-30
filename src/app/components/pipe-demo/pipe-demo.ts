import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OridinalPipe } from '../../custompipe/oridinal-pipe';

@Component({
  selector: 'app-pipe-demo',
  imports: [CommonModule, FormsModule, OridinalPipe],
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.css'
})
export class PipeDemo {
  myName='dkafjdsf'
  today=new Date();
  user={
    name:"rajesh",
    age: 23
  }
  num: number=21;
}
