import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-services',
  templateUrl: './tax-services.component.html',
  styleUrls: ['./tax-services.component.scss']
})
export class TaxServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
