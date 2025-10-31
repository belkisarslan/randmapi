import { createStore } from 'vuex'
import characters from './modules/character'
import favorites from './modules/favorites'

export default createStore({
  modules: {
    characters,
    favorites
  }
})