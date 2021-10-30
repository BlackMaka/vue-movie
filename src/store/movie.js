import axios from 'axios';

export default{
  namespaced: true,
  state: () => ({
    movies : [],
  }),
  getters:{},
  mutations : {
    updateState(state, payload){
      Object.keys(payload).forEach(key =>{
        state[key] = payload[key];
      })
    },
    resetMovies(state){
      state.movies = []
    }
  },
  actions: { 
    async searchMovies({commit}, payload){
      const { title, type, number, year } = payload;
      const OMDB_API_KEY = '7035c60c';
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`);
      const { Search, totalResults } = res.data;
      commit('updateState', {
        movies : Search,
      })
    }
  },
}