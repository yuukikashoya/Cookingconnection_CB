import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {path: 'post-list',component:PostListComponent },
  {path: 'aut',component:AuthenticationComponent },
  {path: 'post-edit',component:PostEditComponent },
  {path: '',redirectTo:'aut',pathMatch:'full' },
  {path: 'about',component:AboutComponent},
  {path: 'gallery',component:GalleryComponent },
  {path: 'contactUs',component:ContactUsComponent },
  {path: 'login',component:LoginSignupComponent },
  {path: 'comments',component:CommentComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Bitch = [PostEditComponent,PostListComponent,AuthenticationComponent,AboutComponent,GalleryComponent,ContactUsComponent]