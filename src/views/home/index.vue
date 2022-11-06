<template>
    <div class="homeContainer">
        home-page
        <div>{{ auto }}</div>
        <div>{{ home.msg }}</div>
    </div>
</template>

<script setup>
import useStore from '@/store'
const auto = ref('api自动引入')
const { home } = useStore()
</script>

<style scoped lang="less">

</style>