import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeDesign;
  servicesDesign;
  constructor() { 
    this.homeDesign = [
      { 
        "id": 1,
        "price": "Rs 15,000",
        "img": "assets/images/imgs/img_1.jpeg",
        "name":"bathroom"
      },
      { 
        "id": 2,
        "price": "Rs 16,000",
        "img": "assets/images/imgs/img_2.jpeg",
        "name":"bathroom"
      },
      { 
        "id": 3,
        "price":"Rs 12,000",
        "img": "assets/images/imgs/img_3.jpeg",
        "name":"Hall Design"
      },
      { 
        "id": 4,
        "price":"Rs 14,000",
        "img": "assets/images/imgs/img_4.jpeg",
        "name":"Hall Design"
      },
      { 
        "id": 5,
        "price": "Rs 10,000",
        "img": "assets/images/imgs/img_5.jpeg",
        "name":"Kids Room"
      },
      { 
        "id": 6,
        "price": "Rs 16,000",
        "img": "assets/images/imgs/img_6.jpeg",
        "name":"Kids Room"
      },
      { 
        "id": 7,
        "price": "Rs 9,000",
        "img": "assets/images/imgs/img_7.jpeg",
        "name":"Interior Design"
      },
      { 
        "id": 8,
        "price": "Rs 9,000",
        "img": "assets/images/imgs/img_8.jpeg",
        "name":"Interior Design"
      },
      { 
        "id": 9,
        "price": "Rs 9,000",
        "img": "assets/images/imgs/img_9.jpg",
        "name":"Kitchen Design"
      },
      { 
        "id": 10,
        "price": "Rs 8,000",
        "img": "assets/images/imgs/img_10.jpg",
        "name":"Kitchen Design"
      },
      { 
        "id": 11,
        "price": "Rs 17,000",
        "img": "assets/images/imgs/img_11.jpg",
        "name":"bathroom"
      },
      { 
        "id": 12,
        "price": "Rs 15,000",
        "img": "assets/images/imgs/img_12.jpg",
        "name":"bathroom"
      },
      { 
        "id": 13,
        "price": "Rs 18,000",
        "img": "assets/images/imgs/img_13.jpg",
        "name":"Pooja Room"
      },
      { 
        "id": 14,
        "price": "Rs 23,000",
        "img": "assets/images/imgs/img_14.jpg",
        "name":"Pooja Room"
      },
      { 
        "id": 15,
        "price": "Rs 25,000",
        "img": "assets/images/imgs/img_15.jpg",
        "name":"Small House"
      },
      { 
        "id": 16,
        "price": "Rs 22,000",
        "img": "assets/images/imgs/img_16.jpg",
        "name":"Small House"
      },
      { 
        "id": 18,
        "price": "Rs 15,000",
        "img": "assets/images/imgs/img_23.jpg",
        "name":"Small House"
      },
      { 
        "id": 19,
        "price": "Rs 15,000",
        "img": "assets/images/imgs/img_18.jpg",
        "name":"Small House"
      }, { 
        "id": 20,
        "price": "Rs 12,000",
        "img": "assets/images/imgs/img_19.jpg",
        "name":"Small House"
      }, { 
        "id": 21,
        "price": "Rs 12,000",
        "img": "assets/images/imgs/img_20.jpg",
        "name":"Small House"
      }, { 
        "id": 22,
        "price": "Rs 20,000",
        "img": "assets/images/imgs/img_21.jpg",
        "name":"Small House"
      }
    ],
    this.servicesDesign = [
      { 
        "id": 1,
        "price": "Rs 15,000",
        "img": "assets/images/home/img_1.jpg",
        "name":"ACTOR"
      },
      { 
        "id": 2,
        "price": "Rs 16,000",
        "img": "assets/images/home/img_2.jpg",
        "name":"CRICKTER"
      },
      { 
        "id": 3,
        "price":"Rs 12,000",
        "img": "assets/images/home/img_3.jpg",
        "name":"POLITICIAN"
      },
      { 
        "id": 4,
        "price":"Rs 14,000",
        "img": "assets/images/home/img_4.jpg",
        "name":"FEMALE SINGER"
      },
      { 
        "id": 5,
        "price": "Rs 10,000",
        "img": "assets/images/home/img_5.jpg",
        "name":"RAPER"
      },
      { 
        "id": 6,
        "price": "Rs 16,000",
        "img": "assets/images/home/img_6.jpg",
        "name":"MALE SINGER"
      },
      { 
        "id": 7,
        "price": "Rs 9,000",
        "img": "assets/images/home/img_7.jpg",
        "name":"FEMALE CRICKTER"
      },
      { 
        "id": 8,
        "price": "Rs 9,000",
        "img": "assets/images/home/img_8.jpg",
        "name":"FEMALE ACTRESS"
      },
      { 
        "id": 9,
        "price": "Rs 9,000",
        "img": "assets/images/home/img_9.jpg",
        "name":"COMEDIAN"
      }
    ]
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
