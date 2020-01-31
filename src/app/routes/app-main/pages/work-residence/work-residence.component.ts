import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-residence',
  templateUrl: './work-residence.component.html',
  styleUrls: ['./work-residence.component.scss']
})
export class WorkResidenceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
