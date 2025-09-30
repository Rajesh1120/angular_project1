import { Component } from '@angular/core';
import { Assignment2 } from '../assignment2/assignment2';
import { Assignment3 } from '../assignment3/assignment3';
import { NgxPaginationModule } from 'ngx-pagination';
import { Mymodel } from '../mymodel/mymodel';
import { Assignment4 } from '../assignment4/assignment4';
import { PipeDemo } from '../pipe-demo/pipe-demo';
import { PipesAssginment } from '../pipes-assginment/pipes-assginment';
import { Parentdemo } from '../parentdemo/parentdemo';
import { Childone } from '../childone/childone';

@Component({
  selector: 'app-body',
  imports: [Assignment3, NgxPaginationModule,
    //PipesAssginment, 
    PipeDemo, Mymodel,Parentdemo, Assignment4],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
