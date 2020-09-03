import {Component, Inject, OnInit} from '@angular/core';
import { IProduct } from './product'
import {ProductService} from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private _listFilter: string;

  constructor(private _productService : ProductService) {
  }

  ngOnInit(): void {
    this.products = this._productService.getProducts();

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
  products: IProduct[];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  filterList(): void {
    console.log("Doing filter using: " + this._listFilter);
    if (this._listFilter)
    {
      this.filteredProducts = this.products.filter(x => x.productName.toLocaleLowerCase().indexOf(this._listFilter.toLocaleLowerCase()) !== -1);
    } else
    {
      this.filteredProducts = this.products;
    }
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product Listing ' + message;
    console.log(`Notify Received: ${message}`);
  }
}
