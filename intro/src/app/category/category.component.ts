import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categories = [
  {id:1,name:"meyve"},
  {id:2,name:"sebze"},
  {id:3,name:"tekno"},
  {id:4,name:"dfsfgh"},
  {id:5,name:"gnhjkhl"}
]


  constructor() { }

  ngOnInit(): void {
  }

}
