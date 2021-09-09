import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart/cart.service';
import { PagingInfo } from '../models/pagingInfo';
import { ProductService } from '../services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = []
  loading: boolean = true
  pagingInfo:PagingInfo= {pageSize:10,currentPage:0,pageCount:0}
  pageArray:number[] = []
  filterText:string =""

  constructor(private productService: ProductService,
    private cartService: CartService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    // this.productService.getProducts().subscribe(data => {
    //   this.products = data
    //   this.loading = false;
      
    // }
    // )
    this.delay(100)
    this.getProductsByPage(1)
    
  }

  addToCart(product: Product) {
    this.toastrService.success("sepete eklendi", product.name)
    this.cartService.addToCart(product);
  }

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(() => resolve(), ms)).then(() => {
      this.productService.getProducts().subscribe(data => {
       
        this.loading = false;
        this.pagingInfo.pageCount=Math.ceil(data.length/this.pagingInfo.pageSize)
        this.generatePageArray(this.pagingInfo.pageCount)
        console.log(this.pageArray)
      })
    });
  }

  generatePageArray(pageCount:number){
    for (let i = 0; i < pageCount; i++) {
      
      this.pageArray.push(i)
    }

  }

  getProductsByPage(page:number){
    this.productService.getProductByPage(page).subscribe(data=>{
      this.products=data
      this.pagingInfo.currentPage = page
    })
  }

  getCurrentPageStyle(index:number){
    if (index+1 === this.pagingInfo.currentPage) {
      return "page-item active"
    }else{
      return "page-item "
    }
  }


}
