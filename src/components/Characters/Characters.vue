<template>
  <div>
    <div :class="styles.characterSection">
      <h3 :class="styles.title">Başlık</h3>
      <div :class="styles.characters">
        <div :class="styles.character" v-for="character in characters" :key="character.id">
          <img :src="character.image" :alt="character.name" />
          <div :class="styles.characterOverlay">
            <div :class="styles.characterName">{{ character.name }}</div>
            <div :class="styles.characterInfo">{{ character.species }} — {{ character.status }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import styles from './styles.module.css'
import axios from 'axios'
export default {
  name: 'Characters',
  data() {
    return {
      styles: styles,
      characters: [],
      loading: true,
    }
  },
  methods: {
    async fetchCharacters() {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        this.characters = response.data.results
      } catch (error) {
        console.error('Veri çekilirken hata oluştu:', error)
      } finally {
        this.loading = false
      }
    },

  },
  computed: {

  },
  mounted() {
    this.fetchCharacters()
  }
}
</script>

<style></style>