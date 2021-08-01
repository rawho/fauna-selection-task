import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-button',
  templateUrl: './food-button.component.html',
  styleUrls: ['./food-button.component.scss']
})
export class FoodButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    console.log("clicked")
  }
}
