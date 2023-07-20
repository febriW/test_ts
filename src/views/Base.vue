<script setup lang="ts">

import Card from '@/components/Card.vue'
import NewIcon from '@/components/icons/IconNewItem.vue'
import Rating from '@/components/RatingComponent.vue'


const produk = {
    stock: "In Stock",
    image: "https://rgbtest.s3.ap-southeast-1.amazonaws.com/images/gift/full/xiaomi-mi-a2-lite.jpg",
    title: "Samsung Galaxy S9 - Midnight Black 4/64 Gb",
    point: 20000,
    rating: 3.5,
    review: 160,
    wishlist: 1,
    label: 1,
}

</script>

<template>
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <main>
            <Card
                :stock="produk.stock"
                :image="produk.image"
                :title="produk.title"
                :point="produk.point"
                :wishlist="produk.wishlist"
                :review = "produk.review"
            >
                <template #label v-if="produk.label != 0">
                    <NewIcon />
                </template>
                <template #rating>
                    <Rating :rating="produk.rating" />
                </template>
            </Card>
        </main>
    </div>
</template>
