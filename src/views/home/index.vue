<template>
    <div class="homeContainer">
        home-page
        <div>{{ home.msg }}</div>
        <div>{{ auto }}</div>
    </div>
</template>

<script setup lang="ts">
import useStore from '@/stores'
const { home } = useStore()
// 可以不用再引入 ref 等api，直接使用
const auto = ref('自动引入api')
</script>

<style scoped lang="less">

</style>