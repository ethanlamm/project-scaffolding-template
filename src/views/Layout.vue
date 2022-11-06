<template>
    <div class="layoutContainer">
        <AppNav></AppNav>
        <AppHeader></AppHeader>
        <main class="mainContainer">
            <router-view></router-view>
        </main>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
import AppNav from '@/components/app-nav/index.vue'
import AppHeader from '@/components/app-header/index.vue'
import AppFooter from '@/components/app-footer/index.vue'
export default {
    name: 'Layout',
    components: { AppNav, AppHeader, AppFooter }
}
</script>

<style lang="less" scoped>
.mainContainer {
    padding: 20px;
}
</style>