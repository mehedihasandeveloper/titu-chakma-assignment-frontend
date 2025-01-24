import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  product = {
    id: '',
    productId: '',
    productName: '',
    price: '',
    category: ''
  };

  productList: any[] = [];
  alertMessage: string = '';
  alertClass: string = '';

  setAlert(message: string, type: string): void {
    this.alertMessage = message;
    this.alertClass = `alert-${type} alert-dismissible fade show`;
  }

  closeAlert(): void {
    this.alertMessage = '';
    this.alertClass = '';
  }


  constructor(private productService: ProductService) { }

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

  viewProduct() {
    const id = this.product.productId;
    if (id) {
      this.productService.searchProductById(id).subscribe(
        (data) => {
          this.product = {
            id: data.id,
            productId: data.productId,
            productName: data.productName,
            price: data.price,
            category: data.category,
          };
          this.setAlert('Product fetched successfully!', 'success');
        },
        (error) => {
          console.error('Error fetching product:', error);
          this.setAlert('Product not found!', 'danger');
        }
      );
    } else {
      this.setAlert('Please enter a valid Product ID', 'warning');
    }
  }

  insertProduct(): void {
    this.productService.addProduct(this.product).subscribe(
      (response) => {
        console.log(response.message);
        this.setAlert('Product added successfully!', 'success');
        this.loadAllProducts();
        this.clearForm();
      },
      (error) => {
        console.error('Error adding product:', error);
        this.setAlert('Failed to add product!', 'danger');
      }
    );
  }


  updateProduct(): void {
    if (this.product.productId) { this.productService.updateProduct(Number(this.product.id), this.product).subscribe((response) => { console.log(response.message); this.setAlert('Product updated successfully!', 'success'); this.loadAllProducts(); this.clearForm(); }, (error) => { console.error('Error updating product:', error); this.setAlert('Failed to update product!', 'danger'); }); } else { this.setAlert('Please select a product to update', 'warning'); }
  }


  deleteProduct(): void { if (this.product.productId) { this.productService.deleteProduct(Number(this.product.id)).subscribe((response) => { console.log(response.message); this.setAlert('Product deleted successfully!', 'success'); this.loadAllProducts(); this.clearForm(); }, (error) => { console.error('Error deleting product:', error); this.setAlert('Failed to delete product!', 'danger'); }); } else { this.setAlert('Please select a product to delete', 'warning'); } }

  clearForm(): void {
    this.product = {
      id: '',
      productId: '',
      productName: '',
      price: '',
      category: ''
    };
  }
}
