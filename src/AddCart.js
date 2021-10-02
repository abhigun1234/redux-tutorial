import React from 'react';
import {createStore} from 'redux'
function AddCart(props) {
  
    
function addToCart(){
    
    console.log("store",store.getState())
    store.dispatch({type:"ADD_CART"})
    console.log("store",store.getState())
}
function removeToCart(){
    
    console.log("store",store.getState())
    store.dispatch({type:"REMOVE_CART"})
    console.log("store",store.getState())
}
function deleteToCart(){
    
    console.log("store",store.getState())
    store.dispatch({type:"DELETE_CART"})
    console.log("store",store.getState())
}
    var item=0;
    var productData=[{itemid:1,}]
    //reducer
    const cartReducer=(state=productData,action)=>{
        console.log("reducer invoked",state)
        console.log("action",action)
        switch(action.type){
            case "ADD_CART":
                console.log("add to")
                
                return state+1;
            break
            case "REMOVE_CART":
                console.log("REMOVE to")
                return state-2;
            break
            case "DELETE_CART":
                return state-1
                break
            // case default:
            //     console.log("add to")
            //     return state+0;
            //     break



        }
    }
    //store

    var store=createStore(cartReducer)
    return (
        <div>
            <img src="data:image/png;base64,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"/>
            <button onClick={()=>addToCart}>Add To Cart</button>
            <button onClick={deleteToCart}>Remove Cart</button>
            <button onClick={removeToCart}>Remove Cart</button>
        </div>
    );
}

export default AddCart;