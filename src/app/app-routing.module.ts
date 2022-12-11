import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CurryComponent } from './att/curry/curry.component';
import { EggComponent } from './att/egg/egg.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GarlicbreadComponent } from './att/garlicbread/garlicbread.component';
import { KimchiComponent } from './att/kimchi/kimchi.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { MisoComponent } from './att/miso/miso.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';
import { ShrimpComponent } from './att/shrimp/shrimp.component';
import { SpinachComponent } from './att/spinach/spinach.component';
import { TantanmenComponent } from './att/tantanmen/tantanmen.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { Gallery2Component } from './gallery2/gallery2.component';
// import { IndcurrComponent } from './att/indcurr/indcurr.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'post-list',component:PostListComponent,canActivate:[AuthGuard] },
  {path: 'aut',component:AuthenticationComponent,canActivate:[AuthGuard]  },
  {path: 'post-edit',component:PostEditComponent },
  {path: '',redirectTo:'log',pathMatch:'full' },
  {path: 'about',component:AboutComponent,canActivate:[AuthGuard] },
  {path: 'gallery',component:GalleryComponent,canActivate:[AuthGuard]  },
  {path: 'contactUs',component:ContactUsComponent,canActivate:[AuthGuard]  },
  {path: 'login',component:LoginSignupComponent ,canActivate:[AuthGuard] },
  {path: 'egg',component:EggComponent,canActivate:[AuthGuard]  },
  {path: 'spinach',component:SpinachComponent ,canActivate:[AuthGuard] },
  {path: 'garlicbread',component:GarlicbreadComponent ,canActivate:[AuthGuard] },
  {path: 'shrimp',component:ShrimpComponent,canActivate:[AuthGuard] },
  {path: 'miso',component:MisoComponent,canActivate:[AuthGuard] },
  {path: 'tantanmen',component:TantanmenComponent,canActivate:[AuthGuard] },
  {path: 'curry',component:CurryComponent,canActivate:[AuthGuard] },
  {path: 'kimchi',component:KimchiComponent,canActivate:[AuthGuard] },
  {path: 'log',component:LoginComponent},
  {path: 'sign',component:SignupComponent},



  {path: 'comments',component:CommentComponent ,canActivate:[AuthGuard] },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Bitch = [PostEditComponent,PostListComponent,AuthenticationComponent,
  AboutComponent,GalleryComponent,ContactUsComponent,EggComponent,SpinachComponent,
  GarlicbreadComponent,ShrimpComponent,MisoComponent,TantanmenComponent,CurryComponent,
  KimchiComponent,LoginComponent,SignupComponent]