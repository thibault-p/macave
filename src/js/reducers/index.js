import {
  ADD_BOTTLE,
  CREATE_BOTTLE,
  DELETE_BOTTLE,
  REMOVE_BOTTLE,
  SHOW_DETAILS,
  HIDE_DETAILS,
  ENABLE_SEARCH,
  DISABLE_SEARCH
} from "../constants/action-types";

const initialState = {
  bottles: [
    {
      id: 1,
      name: "Bouteille 1",
      subtitle: "Vin rouge bordeau",
      image:
        "https://www.atabula.com/wp-content/uploads/2016/09/etiquette-chapoutier-braille.png",
      quantity: 0,
      year: 1982,
      tags: ["tag1", "tag2"],
      description:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de"
    },
    {
      id: 2,
      name: "Bouteille 2",
      subtitle: "Vin rouge bordeau",
      image:
        "https://www.atabula.com/wp-content/uploads/2016/09/etiquette-chapoutier-braille.png",
      quantity: 20,
      year: 1982,
      tags: ["tag1", "tag2"],
      description:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de"
    },
    {
      id: 3,
      name: "Bouteille 3",
      subtitle: "Vin rouge bordeau",
      image:
        "https://www.atabula.com/wp-content/uploads/2016/09/etiquette-chapoutier-braille.png",
      quantity: 30,
      year: 1982,
      tags: ["tag1", "tag2"],
      description:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de"
    }
  ],
  details: {
    bottle: null,
    edit: false
  },
  search: false
};

const rootReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_BOTTLE:
      return { ...state, bottles: [...state.bottles, action.payload] };
    case DELETE_BOTTLE:
      return {
        ...state,
        bottles: state.bottles.filter(bottle => {
          return bottle.id === action.payload;
        })
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
        details: {
          bottle: state.bottles.find(bottle => bottle.id === action.payload),
          edit: false
        }
      };
    case HIDE_DETAILS:
      return {
        ...state,
        details: {
          bottle: null,
          edit: false
        }
      };
    case ENABLE_SEARCH:
      return {
        ...state,
        search: true
      };
    case DISABLE_SEARCH:
      return {
        ...state,
        search: false
      };
    default:
      return state;
  }
};

export default rootReducer;
