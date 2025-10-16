<template>
 
  <div :class="styles.header">
    <div :class="styles.headerWrapper">
      <router-link to="/" :class="styles.logo">
        RANDMapi
      </router-link>
      <nav :class="styles.navigationMenu">
        <router-link to="/" :class="styles.logo">
          Anasayfa
        </router-link>
        <router-link to="/game" :class="styles.logo">
          Oyun
        </router-link>
        <router-link to="/characters" :class="styles.logo">
          Karakterler
        </router-link>
      </nav>
    </div>
  </div>

</template>
<script>
import styles from './styles.module.css'
export default {
  data() {
    return {
      styles: styles,

    }
  },
}
</script>
<style></style>