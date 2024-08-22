import { HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth/auth.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Config {
    constructor(private authService: AuthService) {}
    getHeaders(): HttpHeaders {
        const token = this.authService.getToken();
        return new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
    }
}
