<template>
    <div class="homeContainer">
        home-page
        <div>{{ auto }}</div>
        <div>{{ home.msg }}</div>
        <div>使用二次封装axios请求数据</div>
        <ul>
            <li v-for="item in home.categoryList" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script setup>
import useStore from '@/store'
const auto = ref('api自动引入')
const { home } = useStore()

// 使用pinia发请求(二次封装的axios)，以及管理数据
onMounted(() => {
    home.getAllCategory()
})
</script>

<style scoped lang="less">

</style>