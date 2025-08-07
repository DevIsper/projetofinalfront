import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Restaurante } from '../../types/types';

interface RestaurantesState {
    itens: Restaurante[];
}

const initialState: RestaurantesState = {
    itens: [],
};

const restaurantesSlice = createSlice({
    name: 'restaurantes',
    initialState,
    reducers: {

        carregarRestaurantes: (state, action: PayloadAction<Restaurante[]>) => {
            state.itens = action.payload;
        },
    },
});

export const { carregarRestaurantes } = restaurantesSlice.actions;
export default restaurantesSlice.reducer;