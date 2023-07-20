<script setup lang="ts">
import { computed } from 'vue';
import FullStarIcon from '@/components/icons/IconFilledStar.vue';
import HalfStarIcon from '@/components/icons/IconHalfFilledStar.vue';
import EmptyStarIcon from '@/components/icons/IconNotFilledStar.vue';

const props = defineProps<{ rating: number, maxRating?: number }>();

const fullStars = computed(() => Math.floor(props.rating));
const hasHalfStar = computed(() => props.rating % 1 !== 0);
const emptyStars = computed(() => (props.maxRating || 5) - Math.ceil(props.rating));
</script>

<template>
    <div class="flex items-center space-x-1">
      <FullStarIcon v-for="i in fullStars" :key="`full-star-${i}`" />
      <HalfStarIcon v-if="hasHalfStar" />
      <EmptyStarIcon v-for="i in emptyStars" :key="`empty-star-${i}`" />
    </div>
</template>
  