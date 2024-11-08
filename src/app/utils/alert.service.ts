import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class AlertService {

	private readonly router = inject(Router);

	async alertApi(status: string, message: string) {
    const value = await Swal.fire({
      title: status,
      text: message,
      icon: 'error'
    });
    if (value.value && Number(status) == 401) {
      localStorage.removeItem('token');
      this.router.navigate(['login'], { replaceUrl: true });
    }
  }

	async showSpinner(message: string) {
    return await Swal.fire({
      text: message,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      didOpen: () => Swal.showLoading()
    });
  }

  hideLoading() {
    return Swal.close();
  }

}