<template>
    <div class="container">
        <div class="main">
            <div class="elements">
                <router-link class="link" to="/">
                    RANDMapi
                </router-link>
                6 tane karakter seçer misin?
                <div class="links">
                    <router-link class="link" to="/characters">
                        Karakterler
                    </router-link>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>

</script>
<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    border: 1px solid red;
}

.main {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.01);
    /* yarı saydam beyaz */
    backdrop-filter: blur(10px);
    /* arka planı bulanıklaştırır */
    -webkit-backdrop-filter: blur(10px);
    /* Safari için */
    border-radius: 20px;
    padding: 26px 34px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    max-width: 660px;
}

.elements {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     flex-wrap: wrap;
    gap: 20px 70px;
}

.links {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 70px;
}

.link {
    color: #c62f3a;
    text-decoration: none;
}

@media (max-width: 768px) {
    .links{
        flex-direction: column;
    }
}

@media (max-width: 480px) {
   .links{
        flex-direction: column;
    }
}
</style>