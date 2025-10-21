import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  userRole:any="teacher";
  
  getUserRole(){
    return this.userRole;
  }
}
