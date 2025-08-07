import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';
import restaurantesReducer from './reducers/restauranteSlice.ts'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        restaurantes: restaurantesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;