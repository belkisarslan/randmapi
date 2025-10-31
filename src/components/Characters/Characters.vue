<template>
  <div>
    <div :class="styles.characterSection">
      <h3 :class="styles.title">Rick And Morty Karakterleri</h3>
      <div :class="styles.characters">
        <div :class="styles.character" v-for="character in processedCharacters" :key="character.id">
          <img :src="character.image" :alt="character.name" />
          <div :class="styles.characterOverlay">
            <div :class="styles.characterName">{{ character.name }}</div>
            <div :class="styles.characterInfo">{{ character.species }} — {{ character.status }}</div>
            <img :src="character.is_favorite ? staredIcon : starIcon" alt="favori" @click="toggleFavorite(character)">
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showGameModal">
    <div :class="styles.alert">
      <div :class="styles.alertMain">
        <p :class="styles.p">6 karakter seçtin! Oyunu başlatmak ister misin?</p>
        <div :class="styles.buttons">
          <button :class="styles.laterBtn"><router-link :class="styles.link" to="/">Anasayfaya Dön</router-link></button>
          <button :class="styles.laterBtn"><router-link :class="styles.link" to="/game" >Başla!</router-link></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import styles from './styles.module.css'
import staredIcon from '../../assets/stared.svg'
import starIcon from '../../assets/star.svg'

export default {
  data() {
    return {
      styles,
      starIcon,
      staredIcon,
      showGameModal: false,
    }
  },

  watch: {
    isGameReady(newVal) {
      if (newVal) {
        this.showGameModal = true
        console.log(this.showGameModal)
      }
    }
  },

  computed: {

    ...mapGetters('characters', ['allCharacters']),
    ...mapGetters('favorites', ['allFavorites']),
    ...mapGetters('favorites', ['isGameReady']),

    processedCharacters() {
      return this.allCharacters.map(char => ({
        ...char,
        is_favorite: this.allFavorites.some(f => Number(f.id) === Number(char.id))
      }));
    }
  },

  methods: {
    ...mapActions('characters', ['fetchCharacters']),
    ...mapActions('favorites', ['toggleFavorite']),
    closeModal() {
      this.showGameModal = false
    }
  },


  mounted() {
    this.fetchCharacters()
  },



}
</script>
