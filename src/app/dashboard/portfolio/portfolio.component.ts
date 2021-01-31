import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
employee;
  constructor() { 
    this.employee = [
      { 
        "id": 1,
        "price": "Rs 1,000",
        "img": "assets/images/bathroom design/bathroom_1.jpg",
        "name":"bathroom"
      },
      { 
        "id": 2,
        "price": "Rs 1,000",
        "img": "assets/images/bathroom design/bathroom_2.jpg",
        "name":"bathroom"
      },
      { 
        "id": 3,
        "price":"Rs 2,000",
        "img": "assets/images/hall design/hall_1.jpg",
        "name":"Hall Design"
      },
      { 
        "id": 4,
        "price":"Rs 2,000",
        "img": "assets/images/hall design/hall_2.jpg",
        "name":"Hall Design"
      },
      { 
        "id": 4,
        "price": "Rs 1,000",
        "img": "assets/images/kids room/kd_1.jpg",
        "name":"Kids Room"
      },
      { 
        "id": 4,
        "price": "Rs 1,000",
        "img": "assets/images/kids room/kd_2.jpg",
        "name":"Kids Room"
      },
      { 
        "id": 4,
        "price": "Rs 2,000",
        "img": "assets/images/interir design/interior_1.jpg",
        "name":"Interior Design"
      },
      { 
        "id": 4,
        "price": "Rs 2,000",
        "img": "assets/images/interir design/interior_2.jpg",
        "name":"Interior Design"
      },
      { 
        "id": 4,
        "price": "Rs 1,000",
        "img": "assets/images/kitchen/kitchen_1.jpg",
        "name":"Kitchen Design"
      },
      { 
        "id": 4,
        "price": "Rs 1,000",
        "img": "assets/images/kitchen/kitchen_2.jpg",
        "name":"Kitchen Design"
      },
      { 
        "id": 4,
        "price": "Rs 2,000",
        "img": "assets/images/parda/parda_1.jpg",
        "name":"bathroom"
      },
      { 
        "id": 4,
        "price": "Rs 2,000",
        "img": "assets/images/parda/parda_2.jpg",
        "name":"bathroom"
      },
      { 
        "id": 4,
        "price": "Rs 1,000",
        "img": "assets/images/pooja room/pooja_1.jpg",
        "name":"Pooja Room"
      },
      { 
        "id": 4,
        "price": "Rs 2,000",
        "img": "assets/images/pooja room/pooja_2.jpg",
        "name":"Pooja Room"
      },
      { 
        "id": 4,
        "price": "Rs 8,000",
        "img": "assets/images/small house/home_1.jpg",
        "name":"Small House"
      }
    ]
  }

  
  ngOnInit(): void {
    window.scrollTo(0, 0);
    console.log("inside portfolio");

  }

}
