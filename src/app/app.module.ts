import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

// import { Gallery2Component } from './gallery2/gallery2.component';
import { EggComponent } from './att/egg/egg.component';
import { SpinachComponent } from './att/spinach/spinach.component';
import { GarlicbreadComponent } from './att/garlicbread/garlicbread.component';
import { ShrimpComponent } from './att/shrimp/shrimp.component';
import { MisoComponent } from './att/miso/miso.component';
import { TantanmenComponent } from './att/tantanmen/tantanmen.component';
import { CurryComponent } from './att/curry/curry.component';
import { KimchiComponent } from './att/kimchi/kimchi.component';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    PostEditComponent,
    AuthenticationComponent,
    HeaderComponent,
    AboutComponent,
    GalleryComponent,
    ContactUsComponent,
    FooterComponent,
    LoginSignupComponent,
    CommentComponent,
    EggComponent,
    SpinachComponent,
    GarlicbreadComponent,
    ShrimpComponent,
    MisoComponent,
    TantanmenComponent,
    CurryComponent,
    KimchiComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
