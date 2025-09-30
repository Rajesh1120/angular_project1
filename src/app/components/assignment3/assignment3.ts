import { Component } from '@angular/core';
import products from './products';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductItem } from '../product-item/product-item';



@Component({
  selector: 'app-assignment3',
  imports: [FormsModule, CommonModule, NgxPaginationModule, ProductItem],
  templateUrl: './assignment3.html',
  styleUrl: './assignment3.css'
})
export class Assignment3 {
  productsList = products;
  p:number=1;

  searchText: string = '';
  filteredProducts: any[] = [...this.productsList];
  searchProduct() {
    return (this.filteredProducts = this.productsList.filter((product) =>
      product.title.toLowerCase().includes(this.searchText.toLowerCase()),
    ));
  }

 

sortAscending: boolean = true;
  sortProducts() {
     this.filteredProducts = [...this.filteredProducts].sort((a, b) =>
      this.sortAscending ? a.price - b.price : b.price - a.price
    );

    this.sortAscending = !this.sortAscending
  }
}
