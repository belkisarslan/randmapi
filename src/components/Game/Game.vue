<template>
    <div class="game-container">
        <h2 class="title">Memory Game 🎮</h2>
        <div class="grid">
            <div v-for="(card, index) in cards" :key="index" class="card" @click="flipCard(index)">
                <div class="card-inner"
                    :class="{ flipped: flippedCards.includes(index) || matchedCards.includes(index) }">
                    <div class="card-front"></div>
                    <div class="card-back">
                        <img :src="card.image" :alt="card.name" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="gameFinished">
        <div class="alert">
            <div class="alert-main">
                <p class="p">Tebrikler🎉</p>
                <div class="buttons">
                    <button  @click="resetGame()" class="later-btn">
                        <router-link class="link" to="/characters">
                          Tekrar Oyna!
                        </router-link></button>
                    <button @click="resetGame()" class="later-btn">
                        <router-link class="link" to="/">
                            Anasayfaya Dön
                        </router-link>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {

    data() {
        return {
            flippedCards: [],     // Açık olan kartların indexleri
            matchedCards: [],     // Eşleşen kartların indexleri
            lockBoard: false,     // Geçici olarak tıklamayı engeller
            gameFinished: false,
        }
    },

    computed: {
        ...mapGetters('favorites', ['allFavorites']),
        cards() {
            const duplicated = [...this.allFavorites, ...this.allFavorites]
            return duplicated.sort(() => Math.random() - 0.5)
        }
    },
        
    methods: {
        ...mapActions('favorites', ['clearFavorites']),

            flipCard(index) {
                // Eğer tıklama kilitliyse veya kart zaten eşleşmişse
                if (this.lockBoard || this.matchedCards.includes(index)) return

                // Eğer kart zaten açıksa, tekrar ekleme
                if (this.flippedCards.includes(index)) return

                this.flippedCards.push(index)

                // İki kart seçildiyse kontrol et
                if (this.flippedCards.length === 2) {
                    this.lockBoard = true
                    this.checkMatch()
                }
            },

            checkMatch() {
                const [firstIndex, secondIndex] = this.flippedCards
                const firstCard = this.cards[firstIndex]
                const secondCard = this.cards[secondIndex]

                if (firstCard.name === secondCard.name) {
                    // Eşleşme varsa
                    this.matchedCards.push(firstIndex, secondIndex)
                    this.flippedCards = []
                    this.lockBoard = false
                } else {
                    // Eşleşme yoksa
                    setTimeout(() => {
                        this.flippedCards = []
                        this.lockBoard = false
                    }, 1000)
                }

                if (this.matchedCards.length == this.cards.length) {
                    setTimeout(() => {
                        this.gameFinished = true
                    }, 500)
                }
            },

            resetGame() {
                this.clearFavorites()
                this.matchedCards = []
                this.gameFinished = false
                console.log(this.$store.state.favorites.favorites)
            }
    }

}  
</script>

<style scoped>
.game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: radial-gradient(circle at center, #1e1e2f, #0e0e14);
    color: #fff;
    padding: 20px;
    box-sizing: border-box;
}

.title {
    margin-bottom: 30px;
    font-size: 2rem;
    letter-spacing: 1px;
    text-align: center;
}

.grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 50px));
    gap: 16px;
    justify-content: center;
}

.card {
    width: 100%;
    aspect-ratio: 3 / 4;
    perspective: 800px;
    cursor: pointer;
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s ease;
}

.card-inner.flipped {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    backface-visibility: hidden;
    overflow: hidden;
}

.card-front {
    /* background: linear-gradient(145deg, #2c2c3a, #1e1e2f); */
    background-image: url("https://images.pexels.com/photos/3411139/pexels-photo-3411139.jpeg");
    background-size: cover;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.card-front::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.55);
    /* 🔹 Gölgenin yoğunluğu */
    pointer-events: none;
    /* Tıklamayı engellemez */
    transition: background 0.3s ease;
}

.card-back {
    transform: rotateY(180deg);
}

.card-back img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.alert {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #00000094;
    z-index: 999;
    transition: opacity 0.2s ease;
}

.alert-main {
    display: flex;
    align-items: center;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 26px 34px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    max-width: 660px;
    gap: 50px;
}

.alert-main .p {
    color: white;
    text-align: center;
}

.buttons {
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;


}

.link {
    text-decoration: none;
    color: white;
}

.later-btn {
    text-decoration: none;
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    color: white;
    border-radius: 10px;
    padding: 10px;
    font-family: "Inter", sans-serif;
}

.later-btn:hover {
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    transition: border-radius 0.5s ease;
}

@media (max-width: 768px) {
    .grid {
        grid-template-columns: repeat(3, minmax(90px, 120px));
        gap: 12px;
    }

    .title {
        font-size: 1.5rem;
    }
}

@media (max-width: 480px) {
    .grid {
        grid-template-columns: repeat(3, minmax(80px, 100px));
        gap: 10px;
    }

    .title {
        font-size: 1.2rem;
    }
}
</style>