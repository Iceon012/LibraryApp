import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LibraryusersComponent } from './libraryusers/libraryusers.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ReportComponent } from './report/report.component';
import { SignupComponent } from './signup/signup.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StudentlogComponent } from './studentlog/studentlog.component';
import { LogComponent } from './log/log.component';
import { PurposeComponent } from './purpose/purpose.component';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'log', component: LogComponent,
  children: [
    {path: 'purpose', component: PurposeComponent},
    {path: '', redirectTo: 'log', pathMatch: 'full'}
  ]},
  {path: 'purpose', component:PurposeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'studentlog', component: StudentlogComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sidenav', component: SidenavComponent,
  children: [
    {path: 'report', component: ReportComponent},
    {path: 'libraryusers', component: LibraryusersComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'account', component: AccountComponent},
    {path: 'viewstudents/:eid', component: ViewstudentsComponent},
    {path: '', redirectTo: 'account', pathMatch: 'full'}
  ]},
  {path: 'header', component: HeaderComponent},
  {path: '', redirectTo:'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
