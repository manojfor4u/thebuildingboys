import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electrician',
  templateUrl: './electrician.component.html',
  styleUrls: ['./electrician.component.scss']
})
export class ElectricianComponent implements OnInit {

  electricianDesign;
  constructor() {
    this.electricianDesign = [
      {
        "id": 1,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/elect/elect_1.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 2,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/elect/elect_2.jpg",
        "name": "2100 Sq Feet / Rs 6300"
      },
      {
        "id": 3,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/elect/elect_3.jpg",
        "name": "1600 Sq Feet / Rs 5000"
      },
      {
        "id": 4,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/elect/elect_4.jpg",
        "name": "1800 Sq Feet / Rs 5400"
      },
      {
        "id": 5,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/elect/elect_5.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 6,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/elect/elect_6.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 7,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/elect/elect_7.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 8,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/elect/elect_8.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 9,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/elect/elect_5.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      }
    ]
  }
  ngOnInit(): void {
  }

}
