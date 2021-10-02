import React from 'react';
import { bindActionCreators } from 'redux';
import {createStore} from 'redux'
function Bank(props) {

function addToCart(){
    
    console.log("store",store.getState())
    store.dispatch({type:"ADD_CART"})
    console.log("store",store.getState())
}
function deleteToCart(){
    
    console.log("store",store.getState())
    store.dispatch({type:"DELETE_CART"})
    console.log("store",store.getState())
}
    var item=0;
    //reducer
    const cartReducer=(state=item,action)=>{
        console.log("reducer invoked",state)
        console.log("action",action)
        switch(action.type){
            case "ADD_CART":
                console.log("add to")
                return state+1;
            break
            case "DELETE_CART":
                return state-1

        }
    }
    //store

    var store=createStore(cartReducer)

    return (
        <div>
            <img src="data:image/png;base64,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"/>
            <button onClick={addToCart}>Add to Cart</button>
            <button onClick={deleteToCart}>Add to Cart</button>
        </div>
    );
}

export default Bank;