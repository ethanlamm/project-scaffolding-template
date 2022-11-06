<template>
    <div class="aboutContainer">
        about-page
        <div>{{ about.msg }}</div>
    </div>
</template>

<script setup lang="ts">
import useStore from '@/stores'
const { about } = useStore()
</script>

<style scoped lang="less">

</style>