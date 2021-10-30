export default{
  //module
  namespaced: true,
  //data
  state: () => ({
    movies : []
  }),
  //computed
  getters: {
    moviesIds(state){
      return state.movies.map(m => m.imdbID)
    }
  },
  //methods 상태 변이는 mutations에서
  mutations : {
    resetMovies(state){
      state.movies = []
    }
  },
  //비동기
  actions: { //context를 활용해 불러올 수 있다.
    // searchMovies(context){
    //   context.state
    //   context.getters
    //   context.commit //mutations  
    // }
    //searchMovies({state, getters, commit}){
    searchMovies(){
    }
  },
}