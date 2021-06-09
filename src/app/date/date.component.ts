import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  
  dateMessage: string ;
  someNumber: number=10;

  constructor() {
    let currentDate = new Date();
    this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
   }

  ngOnInit(): void {
  }

  addTwoNumbers(a: number,b: number){
    return a+b;
  }
}
