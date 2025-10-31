export default {
  namespaced: true, 

  state() {
    return {
      characters: [],
    }
  },

  mutations: {
    setCharacters(state, characters) {
      state.characters = characters
    },
  },

  actions: {
    async fetchCharacters({ commit }) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        const simplified = data.results.map(c => ({
          id: c.id,
          name: c.name,
          species: c.species,
          status: c.status,
          image: c.image,
        }))
        commit('setCharacters', simplified)
      } catch (error) {
        console.error('Veri çekme hatası:', error)
        console.error('API hatası:', error)
      }
    },
  },

  getters: {
    allCharacters(state) {
      return state.characters
    },
    
  },
}