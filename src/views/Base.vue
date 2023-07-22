<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue'
import CompanyLogo from '@/components/icons/IconLogo.vue'
</script>

<template>
    <header>
        <CompanyLogo />
    </header>
    <div class="container mx-auto min-h-screen py-8">
        <RouterView /> 
    </div>
    <Footer />
</template>
