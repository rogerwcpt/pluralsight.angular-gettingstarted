import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private _listFilter: string = 'cart';
  ngOnInit(): void {
   this.filteredProducts = this.products;
  }
  pageTitle: string  = 'Product Listing';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  set listFilter(value: string) {
    this._listFilter = value;
    this.filterList();
  }
  get listFilter() {
    return this._listFilter;
  }
  filteredProducts: IProduct[];
  products: IProduct[]= [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  filterList(): void {
    console.log("Doing filter using: " + this._listFilter);
    if (this._listFilter)
    {
      this.filteredProducts = this.products.filter(x => x.productName.toLocaleLowerCase().startsWith(this._listFilter.toLowerCase()));
    } else
    {
      this.filteredProducts = this.products;
    }
  }
}
