<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue'
import CompanyLogo from '@/components/icons/IconLogo.vue'
import IconUpsidedownTriangle from '@/components/icons/IconUpsidedownTriangle.vue'
import { onMounted, ref, toRefs, computed } from 'vue'
import { useProductStore } from '@/stores/product'
import type FilterType from '@/types/FilterType'
import type LabelType from '@/types/LabelType'

const productStore = useProductStore()

onMounted(async ()=>{
    await productStore.fetchData() 
})
const { gift } = toRefs(productStore)

const rounded = (rating: number) => {
  const roundedRating = Math.round(rating * 2) / 2;
  return roundedRating;
}

const filter = ref<FilterType>({
    rating: '',
    stok: '',
    listed: '',
    sort: 'newest',
    isFilter4tarchecked: false,
    isFilterAvailbility: false
})

const label = ref<LabelType>({
    new: false,
    best: false,
    hotitem: false
})

const labelData = (newItem: number, rating: number, review: number) => {
    if(rating >= 4 && review > 25){
        if(newItem)
            return 'hot'
        else
            return 'best'
    }else{
        if(newItem)
            return 'new'
    }
    
}

const filterData = computed(()=>{
    let items = gift.value
    if(filter.value.isFilter4tarchecked){
        items = items.filter(item => {
            return Math.floor(item.attributes.rating) >= 4
        })
    }

    if(filter.value.isFilterAvailbility){
        items = items.filter(item => {
            return item.attributes.stock > 0 
        })
    }
    
    if(filter.value.sort == 'newest')
        return items.sort((a,b) => {
            return b.attributes.isNew - a.attributes.isNew
        })
    else if(filter.value.sort == 'mostReviewed')
        return items.sort((a,b) => {
            return b.attributes.numOfReviews - a.attributes.numOfReviews
        })
})
</script>
<template>
    <div class="grid grid-flow-col gap-x-12">
    <div class="col-span-1">
        <p class="font-raleway font-bold mb-[1.61rem]">Filter</p>
        <hr>
        <div class="mt-6">
            <div class="bg-white shadow-md rounded-sm max-w">
                <div class="p-6">
                    <div class="flex justify-between mb-8">
                        <p class="font-raleway font-light">Rating 4 Ke atas</p>
                        <input v-model="filter.isFilter4tarchecked" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="flex justify-between">
                        <p class="font-raleway font-light">Stok Tersedia</p>
                        <input v-model="filter.isFilterAvailbility" id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-span-8">
        <div class="flex justify-between mb-3">
            <div>
                <p class="font-raleway font-bold">Product List</p>
            </div>
            <!-- Button -->
            <div class="flex space-x-4 items-center">
                <p class="font-raleway font-medium">Urutkan</p>
                <div class="inline-block relative">
                    <select v-model="filter.sort" class="block appearance-none w-full bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-indigo-500">
                        <option value="newest">Terbaru</option>
                        <option value="mostReviewed">Ulasan</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <IconUpsidedownTriangle />
                    </div>
                </div>
            </div>
        </div>
        <hr class="mb-6">
        <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 md:lg-grid-3 lg:grid-cols-4">
            <div class="" v-for="data in filterData" :key="data.id">
                <Card
                    :id = data.attributes.id
                    :stock= data.attributes.stock
                    :image= data.attributes.images[0]
                    :title= data.attributes.name
                    :point= data.attributes.points
                    :wishlist= data.attributes.isWishlist
                    :rate= rounded(data.attributes.rating)
                    :review = data.attributes.numOfReviews
                    :label= "labelData(data.attributes.isNew, data.attributes.rating, data.attributes.numOfReviews)" />
            </div>
        </div>
    </div>
</div>
</template>