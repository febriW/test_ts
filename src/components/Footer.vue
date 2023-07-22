<script setup lang="ts">
import IconIG from '@/components/icons/IconInstagram.vue'
import IconFB from '@/components/icons/IconFacebook.vue'
import IconTWT from '@/components/icons/IconTwitter.vue'

</script>
<template>
    <footer class="bg-gray-900 text-white py-10 px-40">
    <div class="container px-4">
        <div class="flex justify-between items-center">
            <div class="flex space-x-8 items-center">
                <IconIG />
                <IconFB />
                <IconTWT />
            </div>
            <div class="flex space-x-4">
                <a href="#" class="text-white hover:text-gray-400 font-raleway">Terms & Condition</a>
                <a href="#" class="text-white hover:text-gray-400 font-raleway">|</a>
                <a href="#" class="text-white hover:text-gray-400 font-raleway">Copyright &copy; 2018. All rights reserved. PT Radya Gita Bahagia</a>
            </div>
        </div>
    </div>
    </footer>
</template>