import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/category.service';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private service: ProductService) {}
  listProduct: any;
  keyWord: string = '';
  pageIndex: number = 1;
  pageSize: number = 100;
  totalLength: any;
  page: number = 1;
  ngOnInit(): void {
    this.loadProduct(this.keyWord, this.page, this.pageSize);
    //this.getAllProduct();
  }
  loadProduct(keyWord, pageIndex, pageSize) {
    this.service.getAllPageing(keyWord, pageIndex, pageSize).then(
      (data: any) => {
        this.listProduct = data.items;
        this.totalLength = data.items.length;
        console.log(data.objects);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getAllProduct() {
    this.service.getAll().then(
      (data: any) => {
        this.listProduct = data;
        this.totalLength = data.length;
        console.log(data.length);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  Delete(id) {
    debugger;
    this.service.delete(id).then(
      (data) => {
        this.loadProduct(this.keyWord, this.pageIndex, this.pageSize);
      },
      (error) => {
        console.log('error');
      }
    );
  }
  search(keyWord) {
    this.loadProduct(keyWord, this.pageIndex, this.pageSize);
  }
  refresh() {
    this.loadProduct(this.keyWord, this.pageIndex, this.pageSize);
  }
}
