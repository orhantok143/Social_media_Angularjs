import { Injectable } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { login, loginFailer, loginSucsess } from "../actions/auth.actions";
import { catchError, map, mergeMap, of } from "rxjs";



@Injectable({ providedIn: 'root'})
export class AuthEffect{
    constructor(
        private actions$: Actions,
        private authService : AuthService
    ) {}

    login$ = createEffect(()=>
        this.actions$.pipe(
            ofType(login),
            mergeMap((action)=>this.authService.login(action.username,action.password).pipe(
                map((token)=>loginSucsess({token})),
                catchError((error)=>
                    of(loginFailer({error:error.message}))
                )
            ))
        )
    )
}