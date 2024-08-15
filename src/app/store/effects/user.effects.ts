import {
  userRegister,
  userRegisterFailer,
  userRegisterSuccess,
} from './../actions/user.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../../services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserEffects {
  constructor(private actions$: Actions, private userService: ApiService) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userRegister),
      mergeMap((action) =>
        this.userService.register(action).pipe(
          map((user) => userRegisterSuccess({ user })),
          catchError((error) =>
            of(userRegisterFailer({ error: error.message }))
          )
        )
      )
    )
  );
}
