import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels-project',
  templateUrl: './hotels-project.component.html',
  styleUrls: ['./hotels-project.component.scss']
})
export class HotelsProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
