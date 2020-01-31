import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-residence',
  templateUrl: './student-residence.component.html',
  styleUrls: ['./student-residence.component.scss']
})
export class StudentResidenceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
