<template>
    <div class="homeContainer">
        home-page
        <div>{{ home.msg }}</div>
        <div>{{ auto }}</div>
        <div>使用二次封装axios请求数据</div>
        <ul>
            <li v-for="item in home.categoryList" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import useStore from '@/stores'
const { home } = useStore()

// 可以不用再引入 ref 等api，直接使用
const auto = ref('自动引入api')

// 使用pinia发请求(二次封装的axios)，以及管理数据
onMounted(() => {
    home.getAllCategory()
})
</script>

<style scoped lang="less">

</style>