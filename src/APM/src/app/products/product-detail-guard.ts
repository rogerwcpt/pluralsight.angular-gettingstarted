import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    let id = +route.url[1].path;
    if (isNaN(id) || id < 0)
    {
       alert("Invalid product id");
       this.router.navigate(['/products']);
       return false;
    }
    return true;
  }

}
