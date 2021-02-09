import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  serviceDesign;
  constructor() {
    this.serviceDesign = [
      {
        "id": 1,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/imgs/img_23.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 2,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/imgs/img_23.jpg",
        "name": "2100 Sq Feet / Rs 6300"
      },
      {
        "id": 3,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/imgs/img_23.jpg",
        "name": "1600 Sq Feet / Rs 5000"
      },
      {
        "id": 4,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/imgs/img_23.jpg",
        "name": "1800 Sq Feet / Rs 5400"
      },
      {
        "id": 5,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/imgs/img_23.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 6,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/imgs/img_23.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 7,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/imgs/img_23.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 8,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/imgs/img_23.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 9,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/imgs/img_23.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      }
    ]
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
    console.log("inside services");

  }

}
