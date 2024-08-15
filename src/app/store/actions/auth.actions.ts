import { createAction, props } from "@ngrx/store";

export const login = createAction(
    '[Auth] Login',
    props<{username:string,password:string}>()
)


export const loginSucsess=createAction(
    '[Auth] Login Sucsess',
    props<{token:string}>()
)

export const loginFailer = createAction(
    '[Auth] Login Failer',
    props<{error:any}>()
)