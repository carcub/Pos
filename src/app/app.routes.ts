import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
	{
		path: '',
		redirectTo: 'inicio',
		pathMatch: 'full'
	},
	{
		path: 'login',
		loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent),
		title: 'Pos - Login'
	},
	{
		path: '',
		loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
		title: 'Pos',
		canActivate: [authGuard],
		children: [
			{
				path: 'inicio',
				loadComponent: () => import('./inicio/inicio.component').then(m => m.InicioComponent),
				title: 'Pos - Inicio'
			},
			{
				path: 'productos',
				loadComponent: () => import('./productos/productos.component').then(m => m.ProductosComponent),
				title: 'Pos - Productos'
			}, 
			{
				path: 'ventas',
				loadComponent: () => import('./ventas/ventas.component').then(m => m.VentasComponent),
				title: 'Pos - Ventas'
			}
		]
	},
	{
		path: '**',
		redirectTo: 'inicio'
	}
];
