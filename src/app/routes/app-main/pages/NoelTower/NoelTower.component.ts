import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-NoelTower',
  templateUrl: './NoelTower.component.html',
  styleUrls: ['./NoelTower.component.scss']
})
export class NoelTowerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
