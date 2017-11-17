import {createStore} from 'redux';

const defaultState={
    num:1,
    product_list:[],
}

const reducer=(state=defaultState,action)=>{
    switch (action.type) {
        case 'ADD': return {num:state.num+1};
        case 'SET_PRODUCT_LIST': return {...state,product_list:action.product_list};
        default: return state;
    }
}

const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
const myState=store.getState();
