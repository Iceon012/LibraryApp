import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrarylogService } from '../librarylog.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {

  divshow = false;
  showpurpose = false;

  logForm = new FormGroup({
    studID : new FormControl(null)
  })

  constructor( private route:Router, private posting: LibrarylogService) { }

  ngOnInit(): void { }

  StudLogin(){
    console.log(this.logForm.value)
    this.posting.StudLogin(this.logForm.value).subscribe((result:any)=>{
      console.log(result);
      if(result != '0'){
        console.log(alert("Successfully Login!"))
        this.showpurpose = !this.showpurpose;
        //this.route.navigate(['/purpose']);
      }
      else{
        this.divshow = !this.divshow;
        location.reload();
      }
    });
  }

}
