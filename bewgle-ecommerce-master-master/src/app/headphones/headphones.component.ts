import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.css']
})
export class HeadphonesComponent implements OnInit {
  [x: string]: any;
  title="pro1";

  itemData:any=
    { 
      "price": "₹ 29,363.00",
      "latestReviewDate": "2018-10-21T00:00:00.000Z",
      "domain": "amazon.in",
      "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51sAtKgDkDL._AC_.jpg",
      "name": "Bluetooth Headphones", 
      "title": "Bose Quiet Comfort 35 II Wireless Headphone (Black)", 
      "category": "Bluetooth Headphones", 
      "productId": "ABCD4321", 
      "createdAt": "2018-08-31T09:36:08.448Z", 
      "reviewCount": 3333, 
      "topScores": [ 
        { 
          "topic": "Sound Quality",
          "score": 4.8 
        }, 
        { 
          "topic": "Bass", 
          "score": 4.6 
        }, 
        { 
          "topic": "Design and Build", 
          "score": 4.6
        }, 
        { 
          "topic": "Battery Backup",
           "score": 4.6 
          } 
        ] 
      };

  constructor(private router:Router) { 
    console.log(this.itemData);
  }

  ngOnInit() {
  }

  toLogin(){
    this.router.navigate(["/login"]);
  }
}
