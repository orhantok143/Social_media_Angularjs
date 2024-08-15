import {
  userRegister,
  userRegisterFailer,
  userRegisterSuccess,
} from '../actions/user.actions';
import { UserModel } from './../../models/user.model';
import { createReducer, on} from '@ngrx/store';

export interface UserState {
  user: UserModel;
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  user: { name: '', username: '', email: '', password: '', cpassword: '' },
  loading: false,
  error: null,
};

export const UserReducer = createReducer(
  initialState,
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
  }))
);
