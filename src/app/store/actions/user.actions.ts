import { createAction, props } from "@ngrx/store";
import { UserModel } from "../../models/user.model";



// Register User Actions
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


// Get All User Actions
export const getAllUser =createAction(
    '[User] Get All User'
)
export const getAllUserSuccess=createAction(
    '[User] Get All User Success',
    props<{users:UserModel[]}>()
)
export const getAllUserFailer=createAction(
    '[User] Get All User Failer',
    props<{error:any}>()
)


// Get A User Actions
export const getOneUser =createAction(
    '[User] Get One User',
    props<{id:number}>()
)
export const getOneUserSuccess=createAction(
    '[User] Get One User Success',
    props<{user:UserModel}>()
)
export const getOneUserFailer=createAction(
    '[User] Get One User Failer',
    props<{error:any}>()
)