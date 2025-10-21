import { CanDeactivateFn } from '@angular/router';

export const canExitGuard: CanDeactivateFn<unknown> = (component:any,currentRoute, currentState,) => {
if(component.hasChanges){
  console.log("hii")
  alert("please save your changes before you leave")
  return true;
}else{
  return false;
}
};
