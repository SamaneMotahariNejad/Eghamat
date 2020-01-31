import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-research',
  templateUrl: './market-research.component.html',
  styleUrls: ['./market-research.component.scss']
})
export class MarketResearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
