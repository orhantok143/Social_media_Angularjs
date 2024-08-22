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
} from '../actions/user.actions';
import { UserModel } from './../../models/user.model';
import { createReducer, on} from '@ngrx/store';

export interface UserState {
  users:UserModel[]
  user: UserModel
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  users:[],
  user: { name: '', username: '', email: '', password: '', cpassword: '' },
  loading: false,
  error: null,
};

export const UserReducer = createReducer(
  initialState,
  // User Register State
  on(userRegister, (state) => ({ ...state, loading: true })),
  on(userRegisterSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
  })),
  on(userRegisterFailer, (state, { error }) => ({
    ...state,
    error,
    loading:false
  })),

  // Get All User State
  on(getAllUser,(state)=>({...state,loading:true,error:null})),
  on(getAllUserSuccess,(state,{users})=>({...state,loading:false,error:null,users})),
  on(getAllUserFailer,(state,{error})=>({...state,loading:false,error,users:[]})),

  // Get One User State
  on(getOneUser,(state)=>({...state,loading:true,error:null})),
  on(getOneUserSuccess,(state,{user})=>({...state,loading:false,error:null, user})),
  on(getOneUserFailer,(state,{error})=>({...state,loading:false,error,users:[]})),

);
