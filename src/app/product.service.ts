import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  // Fetch all products
  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fetch-all-products`);
  }


  searchProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search-by-product/${id}`);
  }

  // Add a new product
  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-new-product`, product);
  }

  // Update an existing product
  updateProduct(productId: number, product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-product/${productId}`, product);
  }

  // Delete a product
  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-product/${productId}`);
  }

  // sell a product
  sellProduct(productId: string, quantity: number): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/sell`, null, {
      params: new HttpParams()
        .set('productId', productId)
        .set('quantity', quantity.toString()),
      responseType: 'text' as 'json' // Important: Expect a plain text response
    });
  }
  
  // Method to create a new user
  createUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, user);
  }


  login(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post(this.apiUrl +"/login", params, { responseType: 'text' });
  }
  
}
