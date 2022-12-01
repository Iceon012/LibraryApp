import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrarylogService } from '../librarylog.service';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent {

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
    })

  }
  
}
