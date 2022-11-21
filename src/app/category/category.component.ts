import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  pfunction: any = ["To read", "To research", "To review/ study", "To loan/ return book/s", "Others: "];

  categoryusersForm = new FormGroup({
    purpose : new FormControl(null),
    idnum : new FormControl(null),
    others : new FormControl(null),
  })

   //patron: newFormControl(null),

  constructor() { }

  ngOnInit(): void {
  }

}
