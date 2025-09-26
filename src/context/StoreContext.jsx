import { food_list } from "../assets/assets";
import { createContext, useState } from "react";



export const StoreContext=createContext(null)

const StoreContextProvider= (props)=>{


      

       const[cartItems,setCartItems]=useState({})

       const addToCart=(itemId)=>{
          
        if(!cartItems[itemId])
            {
            setCartItems((prev)=>({...prev,[itemId]:1}))
           }
           else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
           }
       }


       const removeFromCart=(itemId)=>{
              setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
       }



        const contextvalue={
            food_list,
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart
       }

       return (
         
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
       )
}

export default StoreContextProvider;