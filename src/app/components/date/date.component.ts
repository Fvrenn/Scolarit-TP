import { Component, OnInit } from '@angular/core' ;

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})

export class DateComponent implements OnInit {
  currentDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }
}
