import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-NoelLife',
  templateUrl: './NoelLife.component.html',
  styleUrls: ['./NoelLife.component.scss']
})
export class NoelLifeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
