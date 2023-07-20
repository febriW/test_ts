<script setup lang="ts">
import IconHeartFill from '@/components/icons/IconHeartFilled.vue'
import IconHeartZero from '@/components/icons/IconHeartZero.vue'
import PointsIcon from '@/components/icons/PointsIcon.vue'
import type CardType from '@/types/CardType'

defineProps<CardType>();

</script>

<template>
<div class="max-w-[250px] max-h-[265px] mx-auto">
    <div class="bg-white shadow-md rounded-lg max-w-sm">
        <div class="px-5 pb-5 relative">
            <div class="absolute top-0 right-0">
                <slot name="label"></slot>
            </div>
            <div class="pt-6">
                <span class="text-sm p-3 font-raleway text-ready-green">{{ stock }}</span>
                <a href="#">
                    <img class="p-3" :src="image">
                </a>
            </div>
            <div>
                <h3 class="text-gray-900 font-raleway font-semibold text-md tracking-tight">
                    {{ title }}
                </h3>
            </div>
            <div class="flex items-center text-xs pt-1">
                <PointsIcon />
                <span class="ml-2" style="color:#74b71b">
                     {{ point }} points
                </span>
            </div>
            <div class="flex items-center justify-between">
                <slot name="rating"></slot>
                <span class="text-gray-300 text-xs font-semibold mr-2 ml-2">{{ review }} Reviews</span>
                <span class="justify-self-end">
                    <div v-if="wishlist > 0">
                        <IconHeartFill />
                    </div>
                    <div v-else>
                        <IconHeartZero />
                    </div>
                </span>
            </div>
        </div>
    </div>
</div>

</template>
