import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-international-exhibitions',
  templateUrl: './international-exhibitions.component.html',
  styleUrls: ['./international-exhibitions.component.scss']
})
export class InternationalExhibitionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
