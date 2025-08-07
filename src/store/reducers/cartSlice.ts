import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
    quantity: number;
}

export type CartState = {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.items.push(newItem);
            }

            console.log(state.items.values());
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },

        clearCart: (state) => {
            state.items = [];
        }
    },
});


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;