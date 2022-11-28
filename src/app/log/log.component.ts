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
  showbutton = true;

  logForm = new FormGroup({
    studID : new FormControl(null)
  })


  constructor( private route:Router, private posting: LibrarylogService) { }
  sample: any;
  log: any;

  StudLogin(){
    //console.log(this.logForm.value)
    this.posting.StudLogin(this.logForm.value).subscribe((result:any)=>{
      console.log(result);
      if(result != '0'){
        localStorage.setItem("id_num",result);
        this.route.navigate(['/purpose']);
        this.showpurpose = !this.showpurpose;
        this.showbutton = false;
      }
      else{
        this.divshow = !this.divshow;
        // location.reload();
        if(this.divshow == true) {
          setTimeout(function(){
            window.location.reload();
         }, 800);
        }
      }
    });
  }

  ngOnInit(): void { 
  }

}
