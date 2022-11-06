<template>
    <div class="homeContainer">
        home-page
        <div>{{ home.msg }}</div>
    </div>
</template>

<script setup lang="ts">
import useStore from '@/stores'
const { home } = useStore()
</script>

<style scoped lang="less">

</style>