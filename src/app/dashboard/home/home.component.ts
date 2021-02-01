import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeDesign;
  interiorDesign;
  constructor() { 
    this.homeDesign = [
      { 
        "id": 1,
        "price": "Rs 15,000",
        "img": "assets/images/home/home_1.jpg",
        "name":"bathroom"
      },
      { 
        "id": 2,
        "price": "Rs 16,000",
        "img": "assets/images/home/home_2.jpg",
        "name":"bathroom"
      },
      { 
        "id": 3,
        "price":"Rs 12,000",
        "img": "assets/images/home/home_3.jpg",
        "name":"Hall Design"
      },
      { 
        "id": 4,
        "price":"Rs 14,000",
        "img": "assets/images/home/home_4.jpg",
        "name":"Hall Design"
      },
      { 
        "id": 5,
        "price": "Rs 10,000",
        "img": "assets/images/home/home_5.jpg",
        "name":"Kids Room"
      },
      { 
        "id": 6,
        "price": "Rs 16,000",
        "img": "assets/images/home/home_6.jpg",
        "name":"Kids Room"
      },
      { 
        "id": 7,
        "price": "Rs 9,000",
        "img": "assets/images/home/home_7.jpg",
        "name":"Interior Design"
      },
      { 
        "id": 8,
        "price": "Rs 9,000",
        "img": "assets/images/home/home_8.jpg",
        "name":"Interior Design"
      },
      { 
        "id": 9,
        "price": "Rs 9,000",
        "img": "assets/images/home/home_9.jpg",
        "name":"Kitchen Design"
      },
      { 
        "id": 10,
        "price": "Rs 8,000",
        "img": "assets/images/home/home_10.jpg",
        "name":"Kitchen Design"
      },
      { 
        "id": 11,
        "price": "Rs 17,000",
        "img": "assets/images/home/home_11.jpg",
        "name":"bathroom"
      },
      { 
        "id": 12,
        "price": "Rs 15,000",
        "img": "assets/images/home/home_12.jpg",
        "name":"bathroom"
      },
      { 
        "id": 13,
        "price": "Rs 18,000",
        "img": "assets/images/home/home_13.jpg",
        "name":"Pooja Room"
      },
      { 
        "id": 14,
        "price": "Rs 23,000",
        "img": "assets/images/home/home_14.jpg",
        "name":"Pooja Room"
      },
      { 
        "id": 15,
        "price": "Rs 25,000",
        "img": "assets/images/home/home_16.jpg",
        "name":"Small House"
      },
      { 
        "id": 16,
        "price": "Rs 22,000",
        "img": "assets/images/home/home_18.jpg",
        "name":"Small House"
      },
      { 
        "id": 18,
        "price": "Rs 15,000",
        "img": "assets/images/home/home_19.jpg",
        "name":"Small House"
      },
      { 
        "id": 19,
        "price": "Rs 15,000",
        "img": "assets/images/home/home_20.jpg",
        "name":"Small House"
      }, { 
        "id": 20,
        "price": "Rs 12,000",
        "img": "assets/images/home/home_21.jpg",
        "name":"Small House"
      }, { 
        "id": 21,
        "price": "Rs 12,000",
        "img": "assets/images/home/home_22.jpg",
        "name":"Small House"
      }, { 
        "id": 22,
        "price": "Rs 20,000",
        "img": "assets/images/home/home_23.jpg",
        "name":"Small House"
      }
    ],
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
    window.scrollTo(0, 0);
  }

}
