<template>
  <div>
    <div :class="styles.characterSection">
      <h3 :class="styles.title">Rick And Morty Karakterleri</h3>
      <div :class="styles.characters">
        <div :class="styles.character" v-for="(c, i) in characters" :key="i">
          <img :src="c.image" :alt="c.name" />
          <div :class="styles.characterOverlay">
            <div :class="styles.characterName">{{ c.name }}</div>
            <div :class="styles.characterInfo">{{ c.species }} — {{ c.status }}</div>
            <img v-if="staredCharacter.includes(i)" src="../../assets/stared.svg" alt="" @click="starCharacter(i)">
            <img v-else src="../../assets/star.svg" alt="" @click="starCharacter(i)">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import styles from './styles.module.css'

export default {
  data() {
    return {
      styles,
      staredCharacter: [],
    }
  },

  computed: {

    ...mapGetters('characters', ['allCharacters']),
    characters() {
      return this.allCharacters
    },
  },

  methods: {

    ...mapActions('characters', ['fetchCharacters']),

    starCharacter(i) {
      const index = this.staredCharacter.indexOf(i)

      if (index === -1) {
        // Eğer dizide yoksa, ekle
        this.staredCharacter.push(i)
      } else {
        // Eğer zaten varsa, diziden çıkar
        this.staredCharacter.splice(index, 1)
      }
    }
  },

  mounted() {

    this.fetchCharacters()
  },


}
</script>
