<template>
    <div class="aboutContainer">
        about-page
        <div>{{ about.msg }}</div>
    </div>
</template>

<script setup>
import useStore from '@/store'
const { about } = useStore()
</script>

<style scoped lang="less">

</style>