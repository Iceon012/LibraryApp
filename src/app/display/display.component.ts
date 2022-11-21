import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrarylogService } from '../librarylog.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  patrons: any;

  constructor(
    private call: LibrarylogService,
    private route: Router
  ) { }

  ngOnInit(): void {

    this.call.patron().subscribe((result:any)=>{
      this.patrons = result;
      console.log(result);
    })
    
  }

}
