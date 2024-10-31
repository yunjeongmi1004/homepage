<template>
    <section class="intro" data-aos="fade-up"  data-aos-duration="1000">
        <h2 class="intro__title">
            안녕하세요,<br>
            웹퍼블리셔 윤정미입니다.
        </h2>
        <p class="intro__content">
            오랜 경험과 노하우로 기술에 깊은 이해도를 가지고<br>'효율적이고 안정적인 UI'를 제공하고자 합니다 😊
        </p>
        <div class="intro__img">
            <img src="@/assets/img/sayhi.png" alt="" class="hi">
            <img src="@/assets/img/scrolldown.png" alt="" class="scrolldown" @click="scrollBottom">
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'

// 클릭이벤트 발생

function scrollBottom() {
    window.scrollTo({ top: 600, behavior: "smooth" }) 
}
</script>