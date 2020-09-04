import {Injectable} from "@angular/core";
import {IProduct} from "./product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _productUrl: string;
  constructor(private _httpClient: HttpClient) {
    this._productUrl = "api/products/products.json"
  }
  getProducts(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(this._productUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(ProductService.handleError))
  }

  private static handleError(err: HttpErrorResponse): Observable<never> {
    console.error((err.message));
    return throwError(err.message)
  }
}
