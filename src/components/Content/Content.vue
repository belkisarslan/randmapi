<template>

   <div :class="styles.movieWrapper">
      <h1 :class="styles.movieTitle">Bakalım Neler Yapacağız?</h1>
      <p>
      Hemen denemelere başlayalım!
      </p>
      <div :class="styles.actionButtons">
        <Link className={styles.playButton}>
          Play
        </Link>
        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <div :class="styles.moviePoster">
        <div :class="styles.moviePosterOverlay"></div>
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