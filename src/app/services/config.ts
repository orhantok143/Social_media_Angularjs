import { HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth/auth.service";
import { Injectable } from "@angular/core";


@Injectable()
export class Config{
    constructor( private authService:AuthService ) {}
    token =this.authService.getToken()
    headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`
    });
}