import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

// AuthService'i Angular DI ile almak için enjekte etmeniz gerekiyor.
// Fonksiyonel interceptor için DI yapılacak bir ortam kurmanız gerekebilir.
// Bu durumda, doğrudan bir fonksiyon yerine, sınıf ile birlikte DI sağlayarak kullanmak daha mantıklı olabilir.

export function authInterceptor(authService: AuthService): HttpInterceptorFn {
  return (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    const token = authService.getToken();

    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next(authReq);
    } else {
      return next(req);
    }
  };
}
