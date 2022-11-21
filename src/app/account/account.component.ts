import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LibrarylogService } from '../librarylog.service';

declare function refresh(): void;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  acourse : any = ['ACT', 'BSIT','BSA','BSBA', 'BSED', 'BEED', 'ABTh', 'BSPsy', 'AB']

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

  patron: any;

  ngOnInit(): void {
    this.post.patron().subscribe((result:any)=>{
      console.log(result)
      this.patron = result;
      if(result == true) {
        this.ngOnInit()
      }
    });
  }
  constructor(private post : LibrarylogService) { }

  SaveFunct(){
    console.log(this.libraryusersForm.value);

    this.post.saveService(this.libraryusersForm.value).subscribe((result:any)=>{ 
      console.log(result)
      if(result != null) {
        console.log(alert('Successfully Added!'))
        this.libraryusersForm.reset()
        refresh()
      }
      })
  }

}

