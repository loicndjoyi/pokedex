import axios from 'axios'

const getAll = () =>  axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=150`)

const get = (id: number) =>  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

const PokemonService = {
  getAll,
  get,
};

export default PokemonService;
