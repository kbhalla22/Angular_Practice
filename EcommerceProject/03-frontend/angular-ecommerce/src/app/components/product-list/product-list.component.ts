import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products: Product[]=[];
currentCategoryId: number=1;
currentCategoryName: string='';
searchMode : boolean=false;

//new properties for pagination
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.listProducts();
    })
    
  }

  listProducts(){
    this.searchMode=this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode){
      this.handleListProducts()
    }
    else{
      this.handleListProducts();
    }

    
  }

  handleSearchProducts(){
    const theKeyword: string =this.route.snapshot.paramMap.get('keyword');
    this.productService.searchProducts(theKeyword).subscribe(
      data=>{
        this.products=data;
      }
    )
  }
  handleListProducts(){
//check if if paramter is vailable
const hasCategoryId: boolean=this.route.snapshot.paramMap.has('id');

if(hasCategoryId){
  this.currentCategoryId=+this.route.snapshot.paramMap.get('id');
  this.currentCategoryName=this.route.snapshot.paramMap.get('name');
} else{
  this.currentCategoryId=1;
  this.currentCategoryName='Books';
}

//get products for given category id
this.productService.getProductList(this.currentCategoryId).subscribe(
  data=>{
    this.products=data;
  }
)
  }
}
