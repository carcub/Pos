import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertService } from '../utils/alert.service';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

	private readonly fb = inject(FormBuilder);
	private readonly alertService = inject(AlertService);
	private readonly authService = inject(AuthService);
	private readonly router = inject(Router);


	showPassword = signal(false);

	authForm = this.fb.group({
		usuario: ['', Validators.required],
		password: ['', Validators.required]
	});


	show() {
		this.showPassword.set(!this.showPassword());
	}

	submit() {
		if(!this.authForm.valid) return this.authForm.markAllAsTouched();

		const { usuario, password } = this.authForm.getRawValue();
		this.alertService.showSpinner('Cargando...');
		this.authService.login(usuario, password).subscribe({
			next: () => this.router.navigate(['/inicio'], { replaceUrl: true }),
			complete: () => this.alertService.hideLoading()
		})
		
	}
}
