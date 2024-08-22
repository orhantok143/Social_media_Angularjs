import {
  getAllUser,
  getAllUserFailer,
  getAllUserSuccess,
  getOneUser,
  getOneUserFailer,
  getOneUserSuccess,
  userRegister,
  userRegisterFailer,
  userRegisterSuccess,
} from './../actions/user.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../../services/user/user.service';

@Injectable({
  providedIn: 'root',
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


  getAll$ = createEffect(()=>
    this.actions$.pipe(
      ofType(getAllUser),
      mergeMap(()=>this.userService.getAllUser().pipe(
        map((users)=>getAllUserSuccess({users})),
        catchError((error)=>of(getAllUserFailer({error:error.message})))
      ))
    )
  )
  getOne$ = createEffect(()=>
      this.actions$.pipe(
        ofType(getOneUser),
        mergeMap((action)=>this.userService.getOneUser(action.id).pipe(
          map((user)=>getOneUserSuccess({user})),
          catchError((error)=>of(getOneUserFailer({error:error.message})))
        ))
      )
    )

}
