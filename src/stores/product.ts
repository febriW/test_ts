import { defineStore } from "pinia"
import axios from '@/helper/axios'
import type Gift from '@/types/GiftType'
import type ApiResponse from '@/types/ApiResType'

export const useProductStore = defineStore('product', {
    state: () => ({
        gift: [] as Gift[]
    }),
    actions: {
        async fetchData() {
            try {
                const response = await axios.get<ApiResponse>('gifts?page[number]=1&page[size]=6')
                const {data, meta} = response.data
                this.gift = data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
})