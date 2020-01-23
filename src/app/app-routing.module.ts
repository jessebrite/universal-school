import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SecureComponent } from './secure/secure.component';
import { LoggedInGuard } from './logged-in.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivateComponent } from './private/private.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'secure',
    component: SecureComponent,
    canActivate: [ LoggedInGuard ]
  },
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [ LoggedInGuard ]
  },
  { path: 'page-not-found', component: PrivateComponent },
  { path: '**', redirectTo: 'page-not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
