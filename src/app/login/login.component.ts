import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrarylogService } from '../librarylog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  librarylogForm = new FormGroup({
    email : new FormControl(null),
    password : new FormControl(null)
  })

  constructor( private route:Router, private posting: LibrarylogService) { }

  ngOnInit(): void { }

  Login(){
    // this.route.navigate(['/main']);
    console.log(this.librarylogForm.value)
    this.posting.Login(this.librarylogForm .value).subscribe((result:any)=>{
      console.log(result);
      if(result != '0'){
        console.log(alert("Successfully Login!"))
        this.route.navigate(['/sidenav']);
      }else{
        console.log(alert("Error Login!"))
        this.librarylogForm.reset()
      }
    });
  }

}
