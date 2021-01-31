import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.scss']
})
export class InteriorComponent implements OnInit {

  interiorDesign;
  constructor() {
    this.interiorDesign = [
      {
        "id": 1,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/interir design/interior_1.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 2,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/interir design/interior_2.jpg",
        "name": "2100 Sq Feet / Rs 6300"
      },
      {
        "id": 3,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/interir design/interior_3.jpg",
        "name": "1600 Sq Feet / Rs 5000"
      },
      {
        "id": 4,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/interir design/interior_4.jpg",
        "name": "1800 Sq Feet / Rs 5400"
      },
      {
        "id": 5,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/interir design/interior_5.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 6,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/interir design/interior_6.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 7,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/interir design/interior_7.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 8,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/interir design/interior_8.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 9,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/interir design/interior_9.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 10,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/interir design/interior_10.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 11,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/interir design/interior_11.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      },
      {
        "id": 12,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/interir design/interior_12.jpg",
        "name": "2000 Sq Feet / Rs 6000"
      }
    ]
  }

  ngOnInit(): void {
  }

}
