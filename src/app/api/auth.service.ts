import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { catchError, lastValueFrom, map, of, tap } from "rxjs";
import { AlertService } from "../utils/alert.service";
import { IUser } from "../interfaces/user.interface";

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private readonly http = inject(HttpClient);
	private readonly alertService = inject(AlertService);

	private readonly API_URL = environment.API_URL;

	login(usuario: string|null, password: string|null) {
		return this.http.post<any>(`${this.API_URL}/login`, { usuario, password })
		.pipe(
			map(data => {
				localStorage.setItem('token', data.token);
				localStorage.setItem('usuario', JSON.stringify(data.usuario));
				return true;
			}),
			catchError((err) => {
				return this.alertService.alertApi(`${err.status}`, `${err.error.message}`);
			})
		)
	}

	async validar_token() {
		return await lastValueFrom(
			this.http.post<any>(`${this.API_URL}/validar_token`, {})
			.pipe(
				map(() => true),
				catchError((error) => of(false))
			),
		);
	}

	logout() {
		return this.http.post<any>(`${this.API_URL}/logout`, {})
		.pipe(
			tap(() => {
				localStorage.removeItem('token');
				localStorage.removeItem('usuario');
			}),
			catchError((err) => {
				return this.alertService.alertApi(`${err.status}`, `${err.error.message}`);
			})
		)
	}
}