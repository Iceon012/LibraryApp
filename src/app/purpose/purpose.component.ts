import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrarylogService } from '../librarylog.service';

@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.css']
})
export class PurposeComponent {
  student = {studID:localStorage.getItem("id_num")};

  students: any;
  is_edit = false;
  
  log = new FormGroup({
    studID : new FormControl(this),
    studName: new FormControl(this),
    datelog: new FormControl(null),
    timelog: new FormControl(null),
    purposelog: new FormControl(null)
  })

  constructor(private post: LibrarylogService,
    private route: Router){

  }


  ngOnInit(){
    this.post.StudLog(this.student.studID).subscribe((result:any)=>{
      this.students = result;
      console.log(this.students[0].stud_id)

      this.log.controls['studID'].setValue(this.students[0].stud_id);
      this.log.controls['studName'].setValue(this.students[0].Name);
    })

}

StudentLogs() {
  console.log(this.log.value)
  this.post.StudentLogs(this.log.value).subscribe((result:any)=>
  {
    this.log.reset()  
    console.log(result)
    if(result == "OK") {
      this.route.navigate(['/log']);
      console.log(alert('Succesfully Login!'))
    }
  })
}
}
