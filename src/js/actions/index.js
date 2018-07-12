import { ADD_BOTTLE, CREATE_BOTTLE, DELETE_BOTTLE, REMOVE_BOTTLE, SHOW_DETAILS, HIDE_DETAILS } from '../constants/action-types';



export const createBottle = (bottle) => ({ type: CREATE_BOTTLE, payload: bottle });

export const deleteBottle = (bottle) => ({ type: DELETE_BOTTLE, payload: bottle });

export const addBottle = (bottle) => ({ type: ADD_BOTTLE, payload: bottle });

export const removeBottle = (bottle) => ({ type: REMOVE_BOTTLE, payload: bottle });

export const showDetails = (bottle) => ({ type: SHOW_DETAILS, payload: bottle });

export const hideDetails = () => ({ type: HIDE_DETAILS, payload: null });