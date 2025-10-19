import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  userRole:any="student";
  
  getUserRole(){
    return this.userRole;
  }
}
