import { createContext, useContext, useReducer } from "react";

const CartContext = createContext()
export const useCart = () => {

    return useContext(CartContext)
}



export const CartProvider = ({ children }) => {
    const initialState = {
        cartItems: []
    }
    const cartReducer = (state, action) => {
        switch (action.type) {
            case 'Add_To_Cart':  //action.payload = { id: 1, name: 'Product A', quantity: 1 };   
                return {             //initialy cartItems hoga na? uska copy,(...state ko bol rha hu)
                    ...state,       // fir ab jo add krenge woh cart items niche ayega
                    cartItems: [...state.cartItems, action.payload]
                };

            case 'Update_Cart':
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => {
                        item.id === action.payload.id ?
                            { ...item, quantity: action.payload.quantity } : item
                    })

                }
            case 'Remove_From_Cart':
                return {
                    ...state,
                    cartItems: state.cartItems.filter((item) => {
                        item.id != action.payload.id
                    })
                }
        }
        return state
    }
    const [cartState, cartDispatch] = useReducer(cartReducer, initialState)


    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    )
}