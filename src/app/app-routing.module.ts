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
// import { Gallery2Component } from './gallery2/gallery2.component';
// import { IndcurrComponent } from './att/indcurr/indcurr.component';

const routes: Routes = [
  {path: 'post-list',component:PostListComponent },
  {path: 'aut',component:AuthenticationComponent },
  {path: 'post-edit',component:PostEditComponent },
  {path: '',redirectTo:'aut',pathMatch:'full' },
  {path: 'about',component:AboutComponent},
  {path: 'gallery',component:GalleryComponent },
  {path: 'contactUs',component:ContactUsComponent },
  {path: 'login',component:LoginSignupComponent },
  {path: 'egg',component:EggComponent },
  {path: 'spinach',component:SpinachComponent },
  {path: 'garlicbread',component:GarlicbreadComponent },
  {path: 'shrimp',component:ShrimpComponent},
  {path: 'miso',component:MisoComponent},
  {path: 'tantanmen',component:TantanmenComponent},
  {path: 'curry',component:CurryComponent},
  {path: 'kimchi',component:KimchiComponent},
  // { path: 'indcurr', component:IndcurrComponent },
  // {path: 'att', redirectTo:'indcurr',pathMatch:'full' },



  {path: 'comments',component:CommentComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Bitch = [PostEditComponent,PostListComponent,AuthenticationComponent,AboutComponent,GalleryComponent,ContactUsComponent,EggComponent,SpinachComponent,GarlicbreadComponent,ShrimpComponent,MisoComponent,TantanmenComponent,CurryComponent,KimchiComponent]