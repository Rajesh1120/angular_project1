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
import { Formdemo1 } from '../formdemo1/formdemo1';
import { TemplateFormDemo1 } from '../template-form-demo1/template-form-demo1';
import { ModeldrivenForm } from '../modeldriven-form/modeldriven-form';
import { TemplateFormSubmit } from '../template-form-submit/template-form-submit';
import { DynamicForm } from '../dynamic-form/dynamic-form';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-body',
  imports: [
    //Assignment3, NgxPaginationModule,
    //PipesAssginment, 
   // Formdemo1,
   // ModeldrivenForm,
   // TemplateFormDemo1,
  //  DynamicForm,
    // TemplateFormSubmit,
   // PipeDemo, Mymodel,Parentdemo, Assignment4
   Navbar,
   RouterOutlet
  ],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
