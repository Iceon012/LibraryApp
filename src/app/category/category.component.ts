import { AnimationStyleMetadata } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LibrarylogService } from '../librarylog.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


   //patron: newFormControl(null),
   patron: any;

  constructor(private post : LibrarylogService) { }

  ngOnInit(): void {
    this.post.patron().subscribe((result:any)=>{
      console.log(result)
      this.patron = result;
      if(result == true) {
        this.ngOnInit()
      }
    });
  }

  

}
