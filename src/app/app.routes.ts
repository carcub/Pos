import { Routes } from '@angular/router';


export const routes: Routes = [
	{
		path: '',
		redirectTo: 'inicio',
		pathMatch: 'full'
	},
	{
		path: '',
		loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
		title: 'Pos',
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
			}
		]
	},
	{
		path: '**',
		redirectTo: 'inicio'
	}
];
