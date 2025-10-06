<template>
  <div>
     <div :class="styles.characterSection">
      <h3 :class="styles.title">Başlık</h3>
      <div :class="styles.characters">
        <div :class="styles.character" v-for="character in characters" :key="character.id">
           <img :src="character.image" :alt="character.name"/>
           <h4>{{ character.name }}</h4>
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
      styles : styles,
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

<style>
  
</style>