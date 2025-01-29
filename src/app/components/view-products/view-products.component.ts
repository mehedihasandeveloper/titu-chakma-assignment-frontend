import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.scss'
})
export class ViewProductsComponent {


  productList: any[] = [];
  searchTerm: string = '';
  
  constructor(private productService: ProductService, private router: Router) { }
  
  ngOnInit(): void {
    this.loadAllProducts();
  }
  
  loadAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.productList = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  
  searchProduct(): void {
    if (this.searchTerm.trim() === '') {
      this.loadAllProducts();  // Reload all products if search is cleared
    } else {
      this.productService.searchProductById(this.searchTerm.trim()).subscribe(
        (data) => {
          this.productList = data ? [data] : []; // Show result if found, else empty array
        },
        (error) => {
          console.error('Error searching product:', error);
          this.productList = []; // Clear product list if no result found
        }
      );
    }
  }
  
  openInNewTab(url: string) {
    window.open(url, '_blank');
  }

  logout() {
    // Perform any logout logic (e.g., clear session or token) here

    // Redirect to login page
    this.router.navigate(['/']);
  }
}
