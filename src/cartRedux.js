import { createStore } from 'redux';

const defaultState = {
    num: 1,
    totalQuantity:0,
    product_list: [],
}

const reducer = (state = defaultState, action) => {
    let count_temp=0;
    switch (action.type) {
        case 'ADD': return { ...state, num: state.num + 1 };
        case 'SET_PRODUCT_LIST': return { ...state, product_list: action.product_list };
        case 'ADD_QUANTITY': return {
            ...state,
            totalQuantity:state.totalQuantity+1, 
            product_list: state.product_list.map(e => {
                if (e.id != action.id) return e;
                return { ...e, quantity: e.quantity + 1}
            })
        }
        case 'DEC_QUANTITY': return {
            ...state,
            product_list: state.product_list.map(e => {
                if (e.id != action.id) return e;
                if (e.quantity==0) return e;
                count_temp=-1;
                return { ...e, quantity: e.quantity - 1,totalQuantity:e.totalQuantity-1 }
                
            }),
            totalQuantity:state.totalQuantity+count_temp
        }
        default: return state;
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
const myState = store.getState();
