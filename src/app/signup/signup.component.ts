import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrarylogService } from '../librarylog.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SignupForm = new FormGroup({
    empid : new FormControl(null),
    empname : new FormControl(null),
    email : new FormControl(null),
    password : new FormControl(null)  
  })

  constructor(private post : LibrarylogService, private route:Router) { }

  ngOnInit(): void { }

  SaveUser(){
    console.log(this.SignupForm.value);
    this.post.SaveUser(this.SignupForm.value).subscribe((result:any)=>
    {
      this.SignupForm.reset()  
      console.log(result)
      if(result == "OK") {
        this.route.navigate(['/login']);
        console.log(alert('Succesfully Created an Account!'))
      }
    })
  }
}