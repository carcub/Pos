import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AuthService } from '../api/auth.service';
import { IUser } from '../interfaces/user.interface';
import { AlertService } from '../utils/alert.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [BsDropdownModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

	private readonly authService = inject(AuthService);
	private readonly router = inject(Router);
	private readonly alertService = inject(AlertService);


	user = signal<IUser|null>(JSON.parse(localStorage.getItem('usuario')!));


	logout() {
		this.alertService.showSpinner('Cerrando sesión...');
		this.authService.logout().subscribe({
			next: () => this.router.navigate(['/login'], { replaceUrl: true }),
			complete: () => this.alertService.hideLoading()
		});
	}
}
