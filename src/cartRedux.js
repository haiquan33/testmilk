import { createStore } from 'redux';

const defaultState = {
    num: 1,
    product_list: [],
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD': return { ...state, num: state.num + 1 };
        case 'SET_PRODUCT_LIST': return { ...state, product_list: action.product_list };
        case 'ADD_QUANTITY': return {
            ...state,
            product_list: state.product_list.map(e => {
                if (e.id != action.id) return e;
                return { ...e, quantity: e.quantity + 1 }
            })
        }
        case 'DEC_QUANTITY': return {
            ...state,
            product_list: state.product_list.map(e => {
                if (e.id != action.id) return e;
                if (e.quantity==0) return e;

                return { ...e, quantity: e.quantity - 1 }
                
            })
        }
        default: return state;
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
const myState = store.getState();
