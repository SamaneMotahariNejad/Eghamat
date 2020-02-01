import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  showMobileMenu(id) {
    const element = document.getElementById(id);
    element.classList.toggle('open');
  }

  overly() {
    this.isNavbarCollapsed = true;
  }
}
