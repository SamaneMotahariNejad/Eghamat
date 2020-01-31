import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.scss']
})
export class BitcoinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
