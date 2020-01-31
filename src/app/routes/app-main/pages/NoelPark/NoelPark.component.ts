import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-NoelPark',
  templateUrl: './NoelPark.component.html',
  styleUrls: ['./NoelPark.component.scss']
})
export class NoelParkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
