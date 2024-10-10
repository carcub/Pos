import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


	private readonly API_URL = environment.API_URL;

  constructor(private http: HttpClient) {
	}

	getProducts() {
		return this.http.get<any[]>(`${this.API_URL}/productos`);
	}
}
