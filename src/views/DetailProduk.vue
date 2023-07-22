<script setup lang="ts">
import IconUpsidedownTriangle from '@/components/icons/IconUpsidedownTriangle.vue'
import { ref, computed, onBeforeMount, onMounted} from 'vue'
import { useRoute } from 'vue-router';
import axios from '@/helper/axios'
import Rating from '@/components/RatingComponent.vue'
import PointIcon from '@/components/icons/PointsIcon.vue'
import IconHeartFill from '@/components/icons/IconHeartFilled.vue'
import IconHeartZero from '@/components/icons/IconHeartZero.vue'
import LabelNew from '@/components/icons/IconNewItem.vue'
import LabelHotItem from '@/components/icons/IconHotItem.vue'
import LabelBestItem from '@/components/icons/IconBestSeller.vue'
import router from '@/router';

const route = useRoute()
const data = ref();

let valueCart = ref(0)
let label = ref()

const decreaseValue = () => {
    valueCart.value = valueCart.value-1
}

const increaseValue = () => {
    valueCart.value = valueCart.value+1
}

const wishlist = async () => {
    try {
    const paramValue = data.value.attributes.id;
    const response = await axios.post(`gifts/${paramValue}/wishlist`)
    console.log(response)
    window.location.reload()
  } catch (error) {
    console.error('Error fetching data:', error)
    window.location.reload()
  }
}

onBeforeMount(async () => {
  try {
    const paramValue = route.params.id;
    const response = await axios.get(`gifts/${paramValue}`);
    data.value = response.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  const rating = Math.round(data.value.attributes.rating * 2) / 2;
    if(rating >= 4 && data.value.attributes.numOfReviews > 25){
        if(data.value.attributes.isNew)
            label.value = 'hot'
        else
            label.value =  'best'
    }else{
        if(data.value.attributes.isNew)
            label.value =  'new'
    }

})

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

<style>
  .custom-hr {
    background-image: linear-gradient(to right, #74B71B 20%, transparent 20%);
    height: 4px; /* You can adjust the height as needed */
  }

  br {
    margin-bottom: 2rem;
    display: block;
    content: " "; 
  }
</style>

<template>
    <!-- component -->
    <section class="text-gray-700 body-font overflow-hidden bg-white mb-40">
        <p class="mb-20 font-raleway font-medium"> <a href="/">List Product</a> > {{ data.attributes.name }}</p>
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="relative lg:w-1/2 w-full object-cover object-center rounded ">
                <div class="absolute top-0 right-0">
                    <div id="label">
                        <LabelNew width="91.486" height="94.565" v-if="label == 'new'" />
                        <LabelBestItem width="91.486" height="94.565" v-else-if="label == 'best'" />
                        <LabelHotItem width="91.486" height="94.565" v-else-if="label == 'hot'" />
                    </div>
                </div>
                <img alt="ecommerce" class="w-full" :src="data.attributes.images[0]">
            </div>
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-3">{{ data.attributes.name }}</h1>
                <div class="flex mb-4">
                    <Rating :rating="data.attributes.rating" />
                    <span class="text-gray-300 text-xs font-semibold mr-2 ml-2">{{ data.attributes.numOfReviews }} Reviews</span>
                </div>
                <div class="flex mb-4 text-lg items-center">
                    <PointIcon width="25" height="25" class="mr-2"/>
                    <span class="text-4xl font-raleway font-bold  mr-2 ml-2 text-ready-green">{{ data.attributes.points }} poins</span>
                    <span class="text-lg p-3 font-bold font-raleway text-ready-green" v-if="checkStock(data.attributes.stock) === 'In Stock'">{{ checkStock(data.attributes.stock) }}</span>
                    <span class="text-lg p-3 font-bold font-raleway text-soldout-red" v-else >{{ checkStock(data.attributes.stock) }}</span>
                </div>
                <div class="mb-6" v-html="data.attributes.info"></div>
                <div>
                    <p class="font-raleway font-light font-2xl mb-2">Jumlah</p>
                    <div class="flex items-center space-x-2 mb-6">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l" @click=decreaseValue()>
                            -
                        </button>
                        <div class="text-center">
                            <input size="1" :value="valueCart" type="text">
                        </div>
                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r" @click=increaseValue()>
                            +
                        </button>
                    </div>
                </div>
                <div class="flex justify-start items-center space-x-4 rounded-lg">
                    <div v-if="data.attributes.wishlist > 0">
                        <button><IconHeartFill /></button>
                    </div>
                    <div v-else>
                        <button><IconHeartZero @click="wishlist()" /></button>
                    </div>
                    <button class="px-16 bg-green-600  hover:bg-green-600 text-white font-bold py-2 rounded-full">
                        Redeem
                    </button>
                    <button class="px-16 border-2 border-ready-green hover:bg-ready-green hover:text-white text-ready-green font-bold py-2 rounded-full">
                        Add to card
                    </button>
                </div>

            </div>
        </div>
    </section>
    <section>
        <div class="lg:w-4/5 mx-auto  ">
            <div>
                <p class="font-raleway font-medium text-xl text-ready-green">Info Produk</p>
                <hr class="custom-hr mb-10">
                <p class="mb-10 font-raleway font-medium text-2xl text-detail">Rincian</p>
                <div v-html="data.attributes.description" class="font-raleway font-medium"></div>
            </div>
        </div>
    </section>
</template>