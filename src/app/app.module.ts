import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { InputMaskModule } from '@ngneat/input-mask';

import { MailerService } from './mailer.service';
import { HttpClientModule } from '@angular/common/http';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    AboutUsComponent,
    HomeComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputMaskModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    MailerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
