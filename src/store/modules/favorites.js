export default {
  namespaced: true,

  state: {
    favorites: [],
    gameReady: false,
  },

  getters: {
    allFavorites(state) {
      return state.favorites
    },
    isGameReady(state) {
      return state.gameReady
    },
  },

  mutations: {
    ADD_FAVORITE(state, character) {
      const exists = state.favorites.find(f => f.id === character.id)
      if (!exists && state.favorites.length < 6) {
        state.favorites.push(character)
      }
      if (state.favorites.length === 6) {
        state.favorites.sort(() => Math.random() - 0.5)
        state.gameReady = true
      }
    },

    REMOVE_FAVORITE(state, characterId) {
      state.favorites = state.favorites.filter(f => f.id !== characterId)
      if (state.favorites.length < 6) {
        state.gameReady = false
      }
    },

    CLEAR_FAVORITES(state) {
      state.favorites = []
      state.gameReady = false
    },


  },

  actions: {
    toggleFavorite({ commit, state }, character) {
      const exists = state.favorites.find(f => f.id === character.id)
      if (exists) {
        commit('REMOVE_FAVORITE', character.id)
      } else if (state.favorites.length < 6) {
        commit('ADD_FAVORITE', character)
      }
    },

    clearFavorites({ commit }) {
      commit('CLEAR_FAVORITES')
    },
  },

}