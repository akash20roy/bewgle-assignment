import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  title="pro1";

  itemData:any=
    { 
      "price": "₹ 1,799.00",
      "latestReviewDate": "2018-10-21T00:00:00.000Z",
      "domain": "amazon.in",
      "imageUrl": "https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg",
      "name": "Bluetooth Speakers", 
      "title": "JBL Go Portable Wireless Bluetooth Speaker with Mic (Black)", 
      "category": "Bluetooth Speakers", 
      "productId": "ABCD1234", 
      "createdAt": "2018-08-31T09:36:08.448Z", 
      "reviewCount": 3013, 
      "topScores": [ 
        { 
          "topic": "Sound Quality",
          "score": 4.6 
        }, 
        { 
          "topic": "Bass", 
          "score": 4.2 
        }, 
        { 
          "topic": "Design and Build", 
          "score": 4.2 
        }, 
        { 
          "topic": "Battery Backup",
           "score": 4.2 
          } 
        ] 
      };



  
  
  getCurrentUser(user): void{
    console.log(user);
  }
  constructor(private router:Router) { 
    console.log(this.itemData);
  }

  ngOnInit() {
  }

  toLogOut(){
    this.router.navigate(["/index"]);
  }

}
