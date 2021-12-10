import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import PokemonService from './PokemonService';

export interface PokedexState {
  pokemons: Array<any>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PokedexState = {
  pokemons: [],
  status: 'idle',
};


export const retrievePokemons = createAsyncThunk(
  'pokeapi.co/api/v2/pokemon/',
  async () => {
    const response = await PokemonService.getAll();
    return response.data;
  }
);

export const retrievePokemon = createAsyncThunk(
  'pokeapi.co/api/v2/pokemon/{id}',
  async (id: number) => {
    const response = await PokemonService.get(id);
    return response.data;
  }
);

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retrievePokemons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(retrievePokemons.fulfilled, (state, action) => {
        state.status = 'idle';
        debugger
        state.pokemons = [...action.payload.results];
      })
      .addCase(retrievePokemon.pending, (state) => {
        state.status = 'idle';
      })
      .addCase(retrievePokemon.fulfilled, (state, action) => {
        // [...action.payload];
      });
  },
});

export const selectPokemons = (state: RootState) => state.pokemons.pokemons;

export default pokedexSlice.reducer;
