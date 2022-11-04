import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {path: 'post-list',component:PostListComponent },
  {path: 'aut',component:AuthenticationComponent },
  {path: 'post-edit',component:PostEditComponent },
  {path: '',redirectTo:'post-list',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Bitch = [PostEditComponent,PostListComponent,AuthenticationComponent]