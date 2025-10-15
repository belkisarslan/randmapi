<template>
  
   <div :class="styles.movieWrapper">
      <h1 :class="styles.movieTitle">Bakalım Neler Yapacağız?</h1>
      <p>
      Hemen denemelere başlayalım!
      </p>
      
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