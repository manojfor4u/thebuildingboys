import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  planDesign;
  constructor() { 
    this.planDesign = [
      { 
        "id": 1,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/PLAN/plan_1.jpg",
        "name":"2000 Sq Feet / Rs 6000"
      },
      { 
        "id": 2,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/PLAN/plan_2.jpg",
        "name":"2100 Sq Feet / Rs 6300"
      },
      { 
        "id": 3,
        "price":"3 Rs Sq Feet",
        "img": "assets/images/PLAN/plan_3.jpg",
        "name":"1600 Sq Feet / Rs 5000"
      },
      { 
        "id": 4,
        "price":"3 Rs Sq Feet",
        "img": "assets/images/PLAN/plan_4.jpg",
        "name":"1800 Sq Feet / Rs 5400"
      },
      { 
        "id": 5,
        "price": "3 Rs Sq Feet",
        "img": "assets/images/PLAN/plan_5.jpg",
        "name":"2000 Sq Feet / Rs 6000"
      }
    ]
  }
  ngOnInit(): void {
  }

}
