import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "./product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string;
  _id: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this._id = +this.route.snapshot.paramMap.get("id");
  }

  public product: IProduct =   {
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2019",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "assets/images/leaf_rake.png"
  }

  ngOnInit(): void {

    this.pageTitle = "Product Detail for ID: " +this._id;
  }

  public goBack(): void {
    this.router.navigate(['/products']);
  }

}
