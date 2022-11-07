import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {path: 'post-list',component:PostListComponent },
  {path: 'aut',component:AuthenticationComponent },
  {path: 'post-edit',component:PostEditComponent },
  {path: '',redirectTo:'aut',pathMatch:'full' },
  {path: 'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Bitch = [PostEditComponent,PostListComponent,AuthenticationComponent,AboutComponent]