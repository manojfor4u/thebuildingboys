import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-dee-elevation',
  templateUrl: './three-dee-elevation.component.html',
  styleUrls: ['./three-dee-elevation.component.scss']
})
export class ThreeDeeElevationComponent implements OnInit {

  homeDesign;
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
      }

    ]
  }

  ngOnInit(): void {
  }

}
