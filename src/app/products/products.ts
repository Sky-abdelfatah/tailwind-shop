import { Movies } from './../services/movies';
import { Component, inject, OnInit } from '@angular/core';
import { Imovie } from '../interface/imovie';
import { Iproducts } from '../interface/iproducts';
import { Sproduct } from '../services/sproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  private readonly productsService = inject(Sproduct);
  products: Iproducts[] = [];

  ngOnInit(): void {
    this.fetchProducts();
  }

  private fetchProducts(): void {
    this.productsService.getsProducts().subscribe({
      next: (data) => {
        console.log(data);
        this.products = data;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
    });
  }
}
