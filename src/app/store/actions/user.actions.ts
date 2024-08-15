import { createAction, props } from "@ngrx/store";
import { UserModel } from "../../models/user.model";

export const userRegister=createAction(
    '[User] User Register',
    props<{user:UserModel}>()
)


export const userRegisterSuccess = createAction(
    '[User]  User Register Success',
    props<{user:UserModel}>()
)


export const userRegisterFailer = createAction(
    '[User]  User Register Failer',
    props<{error:any}>()
)