// There maybe more than one reducers in an app.
// Be hard to recall all the exact files to import.
// With an index, a single import with (.) intellisense
// It will be easier to find what you need.
// This will help colgomerate all our sub-states to one
// single-source of truth state
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodos from './todos.reducers';

// Every sub-reducer-state that were define in your reducer files,
// Should be added to here as a dictionary.
// Defining the structure of our entire reducer state tree
export interface AppState {
  todos: fromTodos.TodosState
}

// Register all reducers
// Our state is composed of a map of action reducer functions.
// These reducer functions are called with each dispatched action
// and the current or initial state and return a new immutable state.
export const reducers: ActionReducerMap<AppState> = {
  todos: fromTodos.TodosReducer
}