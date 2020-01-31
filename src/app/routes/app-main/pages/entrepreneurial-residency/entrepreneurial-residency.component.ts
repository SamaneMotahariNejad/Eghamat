import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrepreneurial-residency',
  templateUrl: './entrepreneurial-residency.component.html',
  styleUrls: ['./entrepreneurial-residency.component.scss']
})
export class EntrepreneurialResidencyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
