import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { Gallery2Component } from './gallery2/gallery2.component';
import { EggComponent } from './egg/egg.component';
import { SpinachComponent } from './spinach/spinach.component';
import { GarlicbreadComponent } from './garlicbread/garlicbread.component';
import { ShrimpComponent } from './shrimp/shrimp.component';
import { MisoComponent } from './miso/miso.component';
import { TantanmenComponent } from './tantanmen/tantanmen.component';
import { CurryComponent } from './curry/curry.component';
import { KimchiComponent } from './kimchi/kimchi.component';


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
    Gallery2Component,
    EggComponent,
    SpinachComponent,
    GarlicbreadComponent,
    ShrimpComponent,
    MisoComponent,
    TantanmenComponent,
    CurryComponent,
    KimchiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
