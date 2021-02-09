import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioDesign;
  constructor() { 
    this.portfolioDesign = [
      { 
        "id": 1,
        "price": "Rs 1,000",
        "img": "assets/images/imgs/img_23.jpg",
        "name":"bathroom"
      },
      { 
        "id": 2,
        "price": "Rs 1,000",
        "img": "assets/images/imgs/img_23.jpg",
        "name":"bathroom"
      },
      { 
        "id": 3,
        "price":"Rs 2,000",
        "img": "assets/images/imgs/img_23.jpg",
        "name":"Hall Design"
      },
      { 
        "id": 4,
        "price":"Rs 2,000",
        "img": "assets/images/imgs/img_23.jpg",
        "name":"Hall Design"
      },
      { 
        "id": 5,
        "price": "Rs 1,000",
        "img": "assets/images/imgs/img_23.jpg",
        "name":"Kids Room"
      },
      { 
        "id": 6,
        "price": "Rs 1,000",
        "img": "assets/images/imgs/img_23.jpg",
        "name":"Kids Room"
      },
      { 
        "id": 7,
        "price": "Rs 2,000",
        "img": "assets/images/imgs/img_23.jpg",
        "name":"Interior Design"
      },
      { 
        "id": 8,
        "price": "Rs 2,000",
        "img": "assets/images/imgs/img_23.jpg",
        "name":"Interior Design"
      },
      { 
        "id": 9,
        "price": "Rs 1,000",
        "img": "assets/images/imgs/img_23.jpg",
        "name":"Kitchen Design"
      },
      { 
        "id": 10,
        "price": "Rs 1,000",
        "img": "assets/images/imgs/img_23.jpg",
        "name":"Kitchen Design"
      },
      { 
        "id": 11,
        "price": "Rs 2,000",
        "img": "assets/images/imgs/img_23.jpg",
        "name":"bathroom"
      },
      { 
        "id": 12,
        "price": "Rs 2,000",
        "img": "assets/images/imgs/img_23.jpg",
        "name":"bathroom"
      },
      { 
        "id": 13,
        "price": "Rs 1,000",
        "img": "assets/images/imgs/img_23.jpg",
        "name":"Pooja Room"
      },
      { 
        "id": 14,
        "price": "Rs 2,000",
        "img": "assets/images/imgs/img_23.jpg",
        "name":"Pooja Room"
      },
      { 
        "id": 15,
        "price": "Rs 8,000",
        "img": "assets/images/imgs/img_23.jpg",
        "name":"Small House"
      }
    ]
  }

  
  ngOnInit(): void {
    window.scrollTo(0, 0);
    console.log("inside portfolio");

  }

}
