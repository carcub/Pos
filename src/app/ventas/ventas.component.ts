import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.scss'
})
export class VentasComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

	
}
