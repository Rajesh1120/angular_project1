import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { Careers } from './components/careers/careers';
import { Contactus } from './components/contactus/contactus';
import { ProductItem } from './components/product-item/product-item';
import { PermanentJobs } from './components/permanent-jobs/permanent-jobs';
import { ContractJobs } from './components/contract-jobs/contract-jobs';
import { UploadVideo } from './components/upload-video/upload-video';
import { teacherGuard} from './guards/teacher-guard-guard';

export const routes: Routes = [
    {path:'', component:Home},
    {path:"home",component:Home},
    {path:"aboutus",component:Aboutus},
    {
        path:"careers", 
        component:Careers,
        children:[
            {path:"permanent",component:PermanentJobs},
            {path:"contract",component:ContractJobs}
        ]

    },
    {path:"contactus", component:Contactus},

    // {path:"users", component:UserComponenet},
    {path:"products", component:ProductItem},
    {path:"uploadvideo", component:UploadVideo,
    canActivate:[teacherGuard]
    }


];
