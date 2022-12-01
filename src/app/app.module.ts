import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LibraryusersComponent } from './libraryusers/libraryusers.component';
import { ReportComponent } from './report/report.component';
import { AccountComponent } from './account/account.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { DatePipePipe } from './date-pipe.pipe';
import { DisplayComponent } from './display/display.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StudentlogComponent } from './studentlog/studentlog.component';
import { LogComponent } from './log/log.component';
import { PurposeComponent } from './purpose/purpose.component';
import { NgxPrintModule } from 'ngx-print';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibraryusersComponent,
    ReportComponent,
    AccountComponent,
    SignupComponent,
    LoginComponent,
    MainComponent,
    CategoryComponent,
    HeaderComponent,
    DatePipePipe,
    DisplayComponent,
    SidenavComponent,
    StudentlogComponent,
    LogComponent,
    PurposeComponent,
    ViewstudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
