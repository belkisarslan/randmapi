import { createStore } from 'vuex'
import characters from './modules/character'

export default createStore({
  modules: {
    characters
  }
})