import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vehicle-form', component: FormComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled",
    scrollOffset: [0,0],
    anchorScrolling: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }