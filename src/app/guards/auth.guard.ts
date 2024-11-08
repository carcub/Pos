import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../api/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async (route, state) => {
	const authService = inject(AuthService);
	const router = inject(Router);

	if(!await authService.validar_token()) {
		await router.navigate(['/login'], { replaceUrl: true });
		return false;
	}
	return true;
};
