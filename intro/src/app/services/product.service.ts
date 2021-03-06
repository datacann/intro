import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Product } from '../product/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string = "http://localhost:3000/products"

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }


}
