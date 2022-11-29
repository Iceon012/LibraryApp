import { Component, OnInit } from '@angular/core';
import { LibrarylogService } from '../librarylog.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  studentLogs: any;

  constructor(private post : LibrarylogService) { }

  ngOnInit(): void {
    this.post.getLogs().subscribe((result:any)=>{
      console.log(result)
      this.studentLogs = result;
      if(result == true) {
        this.ngOnInit()
      }
    });
  }

}
