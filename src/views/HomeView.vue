<script setup>
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import SiteSection from "@/components/SiteSection.vue";
import IntroSection from "@/components/IntroSection.vue";
import MoreSection from "@/components/MoreSection.vue";
</script>

<template>

    <HeaderSection />
    <main id="main" role="main">
        <IntroSection />
        <SiteSection />
        <MoreSection />
    </main>
    <FooterSection />
</template>
