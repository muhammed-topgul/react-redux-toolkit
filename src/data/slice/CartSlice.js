import {createSlice} from "@reduxjs/toolkit";
import courseItems from "../MockData";

const initialState = {
    cartItems: courseItems,
    quantity: 0,
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== itemId);
        },
        increase: (state, action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find(item => item.id === itemId);
            cartItem.quantity += 1;
        },
        decrease: (state, action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find(item => item.id === itemId);
            if (cartItem.quantity > 1) {
                cartItem.quantity -= 1;
            }
        },
        calculateTotal: (state) => {
            let totalPrice = 0;
            let totalQuantity = 0;
            state.cartItems.forEach(item => {
                totalPrice += item.quantity * item.price;
                totalQuantity += item.quantity;
            });
            state.total = totalPrice;
            state.quantity = totalQuantity;
        }
    }
});

export const {
    clearCart,
    removeItem,
    increase,
    decrease,
    calculateTotal
} = cartSlice.actions;

export default cartSlice.reducer;