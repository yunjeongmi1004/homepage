<template>
    <footer>
        <div class="inner">
        <strong>© 2024 yunjeongmi</strong>
        <button @click="scrollTop"><img src="@/assets/img/backup.png" alt=""></button>
        </div>
    </footer>
</template>
<script setup>
import { ref } from 'vue'

// 클릭이벤트 발생

function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" }) 
}
</script>