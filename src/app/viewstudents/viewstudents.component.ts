import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrarylogService } from '../librarylog.service';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent {

  updateStud = new FormGroup({
    ID: new FormControl(null),
    Name: new FormControl(null),
    Course: new FormControl(null),
    Birthdate: new FormControl(null),
    email: new FormControl(null)
  })

  constructor(private activeroute: ActivatedRoute,
    private post: LibrarylogService, private route: Router) { }

  studid: any;

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe(params =>{
      this.studid = params.get('eid');
      console.log(this.studid);
    })


    this.post.StudLog(this.studid).subscribe((result:any)=>{
      this.studid = result;
      console.log(this.studid)

      this.updateStud.controls['ID'].setValue(this.studid[0].stud_id);
      this.updateStud.controls['Name'].setValue(this.studid[0].Name);
      this.updateStud.controls['Course'].setValue(this.studid[0].course);
      this.updateStud.controls['Birthdate'].setValue(this.studid[0].bdate);
      this.updateStud.controls['email'].setValue(this.studid[0].email);
    })

    

  }
  
}
