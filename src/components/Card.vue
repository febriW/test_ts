<script setup lang="ts">
import IconHeartFill from '@/components/icons/IconHeartFilled.vue'
import IconHeartZero from '@/components/icons/IconHeartZero.vue'
import PointsIcon from '@/components/icons/PointsIcon.vue'
import Rating from '@/components/RatingComponent.vue'
import LabelNew from '@/components/icons/IconNewItem.vue'
import LabelHotItem from '@/components/icons/IconHotItem.vue'
import LabelBestItem from '@/components/icons/IconBestSeller.vue'
import type CardType from '@/types/CardType'
import { useRouter } from 'vue-router'

defineProps<CardType>()

const router = useRouter()
const goTo = (e: number) =>{
    router.push({name : 'detailProduk', params: {id: e}})
}

const checkStock = (item: number) => {
    if(item >= 5){
        return 'In Stock'
    }else if(item < 5 && item != 0 ){
        return 'Stock < 5'
    }else{
        return 'Sold Out'
    }
}

</script>

<template>
<div class="min-h-[420px] w-[250px] group">
    <div class="bg-white shadow-md rounded-lg max-w-sm">
        <div class="px-5 pb-5 relative">
            <div class="absolute rounded-lg top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-lime-600 
            opacity-0 group-hover:h-full group-hover:opacity-90 duration-500">
                <h1 class="text-2xl text-white">{{ title }}</h1>
                <button @click="goTo(id)" class="text-white mt-5 px-8 py-3 outline outline-1 rounded-full bg-lime-600 hover:bg-lime-500 duration-300" >Continue Shopping</button>
            </div>
            <div class="absolute top-0 right-0">
                <div id="label">
                    <LabelNew v-if="label == 'new'" />
                    <LabelBestItem v-else-if="label == 'best'" />
                    <LabelHotItem v-else-if="label == 'hot'" />
                </div>
            </div>
            <div class="pt-6">
                <span class="text-sm p-3 font-raleway text-ready-green" v-if="checkStock(stock) === 'In Stock'">{{ checkStock(stock) }}</span>
                <span class="text-sm p-3 font-raleway text-soldout-red" v-else >{{ checkStock(stock) }}</span>
                <a href="#">
                    <img class="p-3 min-h-[265px] min-w-[220px] max-h-[265px] max-w-[220px]" :src="image">
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
                <Rating :rating="rate" />
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
