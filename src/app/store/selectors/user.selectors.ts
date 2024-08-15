import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';


// User state'i için feature selector
export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);

export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);
