export default {
  namespaced: true, 

  state() {
    return {
      characters: [],
      cards: [],
    }
  },

  mutations: {
    setCharacters(state, characters) {
      state.characters = characters
    },
    setCards(state,cards){
      state.cards = cards
    }
  },

  actions: {
    async fetchCharacters({ commit }) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        const selected = data.results.slice(0, 6)
        const duplicated = [...selected, ...selected]
        const shuffled = duplicated.sort(() => Math.random() - 0.5)
        const simplified = data.results.map(c => ({
          name: c.name,
          species: c.species,
          status: c.status,
          image: c.image,
        }))
        commit('setCharacters', simplified)
        commit('setCards', shuffled)
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
    allCards: (state) => state.cards
  },
}