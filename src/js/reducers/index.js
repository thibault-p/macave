import { ADD_BOTTLE, CREATE_BOTTLE, DELETE_BOTTLE, REMOVE_BOTTLE, SHOW_DETAILS, HIDE_DETAILS } from '../constants/action-types';




const initialState = {
    bottles: [],
    bottleDetails: null,
};

const rootReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CREATE_BOTTLE: 
            return { ...state, bottles: [ ...state.bottles, action.payload ] };
        case DELETE_BOTTLE:
            return { 
                ...state, 
                bottles: state.bottles.filter(bottle => {
                    return bottle.id === action.payload;
                }),
            };
        case ADD_BOTTLE:            
            return { 
                ...state, 
                bottles: state.bottles.map(bottle => {
                    if (bottle.id === action.payload) {
                        bottle.quantity++;
                    }
                    return bottle;
                }) 
            };
        case REMOVE_BOTTLE: 
            return { 
                ...state, 
                bottles: state.bottles.map(bottle => {
                    if (bottle.id === action.payload) {
                        bottle.quantity = Math.max(0, bottle.quantity - 1);
                    }
                    return bottle;
                }) 
            };
        case SHOW_DETAILS: 
            return {
                ...state,
                bottleDetails: state.bottles.find(bottle => bottle.id === action.payload.id)
            };
        case HIDE_DETAILS:
            return {
                ...state,
                bottleDetails: null
            };

        default:
        return state;
    }
};

export default rootReducer;