import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Mymodel } from '../mymodel/mymodel';
import Snackbar from 'awesome-snackbar';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-assignment4',
  imports: [FontAwesomeModule, Mymodel, FormsModule],
  templateUrl: './assignment4.html',
  standalone:true,
  styleUrl: './assignment4.css',
})
export class Assignment4 {
  faDeleteLeft = faTrash;
  faView = faEye;
  employees = [
    { id: 1, name: 'John', role: 'Manager', salary: 85000, status: 'Active' },
    { id: 2, name: 'Alice', role: 'Developer', salary: 45000, status: 'Active' },
    { id: 3, name: 'Bob', role: 'Tester', salary: 30000, status: 'Inactive' },
    { id: 4, name: 'Eve', role: 'HR', salary: 40000, status: 'Active' },
  ];
  selectedEmp: any = null;
  copyEmployees = [...this.employees];
  viewMode:boolean=false
  onClickView(id: number) {
    this.viewMode=true
    this.Added=false
    this.selectedEmp = this.copyEmployees.find((emp) => emp.id === id);
    console.log(this.viewMode)
  }
  onClickDelete(id: number) {
    this.viewMode=false
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        this.copyEmployees = this.copyEmployees.filter((emp) => emp.id !== id);
      }
    });
  }
  Added:boolean=false
  onForm(){
    this.Added=true
  }
  newEmp={
    name:'',
    role:'',
    salary:0,
    status:''
  }
  onAddEmployee(form : any){
    console.log(form.value)
    const newEmp = {
      // id: this.copyEmployees.length+1,
      id: this.copyEmployees.length
          ? Math.max(...this.copyEmployees.map((e) => e.id)) + 1
          : 1,
      ...this.newEmp,
    };
    this.copyEmployees.push(newEmp);
    this.newEmp = { name: '', role: '', salary: 0, status: '' };
    new Snackbar('✅ Successfully Added', 
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
    
  }
}
