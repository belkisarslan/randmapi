<template>
  <div>
    <div :class="styles.characterSection">
      <h3 :class="styles.title">Rick And Morty Karakterleri</h3>
      <div :class="styles.characters">
        <div :class="styles.character" v-for="(c,i) in characters" :key="c.id">
          <img :src="c.image" :alt="c.name" />
          <div :class="styles.characterOverlay">
            <div :class="styles.characterName">{{ c.name }}</div>
            <div :class="styles.characterInfo">{{ c.species }} — {{ c.status }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import styles from './styles.module.css'
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const characters = computed(() => store.getters['characters/allCharacters'])

    onMounted(() => {
      store.dispatch('characters/fetchCharacters')
    })

    return {
      characters,
      styles: styles,
    }
  }
}
</script>

