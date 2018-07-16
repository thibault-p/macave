import { ADD_BOTTLE, CREATE_BOTTLE, DELETE_BOTTLE, REMOVE_BOTTLE, SHOW_DETAILS, HIDE_DETAILS } from '../constants/action-types';




const initialState = {
    bottles: [
        { 
            id: 1,
            name: 'Bouteille 1',
            quantity: 0,
            description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de'
        },
        { 
            id: 2,
            name: 'Bouteille 2',
            quantity: 20,
            description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de'
        },
        { 
            id: 3,
            name: 'Bouteille 3',
            quantity: 30,
            description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de'
        }
    ],
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