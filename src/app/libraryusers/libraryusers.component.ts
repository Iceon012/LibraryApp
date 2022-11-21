import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LibrarylogService } from '../librarylog.service';


@Component({
  selector: 'app-libraryusers',
  templateUrl: './libraryusers.component.html',
  styleUrls: ['./libraryusers.component.css']
})
export class LibraryusersComponent implements OnInit {

  
  libraryusersForm = new FormGroup({
    idnum : new FormControl(null),
    lastname : new FormControl(null),
    firstname : new FormControl(null),
    middlename : new FormControl(null),
    course : new FormControl(null),
    date : new FormControl(null),
    time : new FormControl(null),
    email : new FormControl(null),
    password : new FormControl(null)
  })
  constructor(private post : LibrarylogService) { }

  ngOnInit(): void { }

  SaveFunct(){
    console.log(this.libraryusersForm.value);

    this.post.saveService(this.libraryusersForm.value).subscribe((result:any)=>{
      this.libraryusersForm.reset()  
      console.log(result)
      })
  }
}
