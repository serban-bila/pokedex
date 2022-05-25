import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        name: "",
    },
    reducer: {
        select: (state, action) => {state.name = action.payload},
    },
})

export const { select } = pokemonSlice.actions;

export default pokemonSlice.reducer;