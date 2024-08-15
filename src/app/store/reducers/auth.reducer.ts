import { createReducer, on } from "@ngrx/store"
import { login, loginFailer, loginSucsess } from "../actions/auth.actions"


export interface AuthState{
    token:string,
    loading:boolean,
    error:any
}


const initialState:AuthState={
    token:'',
    loading:false,
    error:null
}


export const AuthReducer= createReducer(
    initialState,
    on(login,(state: any)=>({...state,loading:true})),
    on(loginSucsess,(state: any,{token}: any)=>({...state,token:token.access_token,loading:false,error:''})),
    on(loginFailer,(state: any,{error}: any)=>({...state,token:'',loading:false,error:error}))
)