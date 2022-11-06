<template>
    <nav class="app-nav">
        app-nav
        <div class="routerLink">
            <routerLink to="/">Home</routerLink>&nbsp;&nbsp;
            <routerLink to="/about">About</routerLink>
        </div>
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.app-nav {
    background-color: cadetblue;

    .routerLink {
        padding: 10px;
    }
}
</style>