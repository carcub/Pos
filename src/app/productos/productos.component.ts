import { Component, inject, OnInit } from '@angular/core';
import { ProductosService } from '../api/productos.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent implements OnInit {

	private readonly productosService = inject(ProductosService);

	productos: any[] = [];

	ngOnInit(): void {
		this.productosService.getProducts().subscribe(data => {
			this.productos = data;
			console.log(this.productos);
		})
	}
}
