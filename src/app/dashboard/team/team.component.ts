import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teamSize;
  constructor() {
    this.teamSize = [
      // {
      //   "id": 1,
      //   "price": "Rs 1,000",
      //   "img": "assets/images/team/aisha.jpeg",
      //   "name": "Aisha Yadav",
      //   "profile":"Contractor",
      //   "experience":"3 Years Experience"
      // },
      {
        "id": 2,
        "price": "Rs 1,000",
        "img": "assets/images/team/ashok.jpeg",
        "name": " Er. Ashok Kumar",
        "profile":"Civil Engineer",
        "experience":"6 Years Experience"
      },
      {
        "id": 3,
        "price": "Rs 2,000",
        "img": "assets/images/team/manoj.jpeg",
        "name": "Manoj Yadav",
        "profile":"Software Developer",
        "experience":"5 Years Experience"
      },
      {
        "id": 4,
        "price": "Rs 2,000",
        "img": "assets/images/team/uma.jpeg",
        "name": "Uma Mahto",
        "profile":"Contractor",
        "experience":"12 Years Experience"
      },
      {
        "id": 5,
        "price": "Rs 1,000",
        "img": "assets/images/team/sagar.jpeg",
        "name": "Sagar Kumar",
        "profile":"Plumber and Electrician",
        "experience":"15 Years Experience"
      },
      {
        "id": 6,
        "price": "Rs 1,000",
        "img": "assets/images/team/person_7.jpg",
        "name": "Abhishek Yadav",
        "profile":"Contractor",
        "experience":"12 Years Experience"
      }
    ]
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    console.log("inside team");
  }

}
