import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  // sidenav;
  opened: boolean;

  constructor() { }

  ngOnInit() {
  }

  clickHandler() {
    console.log("hhhh")
    this.sidenav.close();
  }
}
