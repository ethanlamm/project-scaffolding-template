<template>
    <nav class="app-nav">
        app-nav
        <div class="routerLink">
            <routerLink to="/">Home</routerLink>&nbsp;&nbsp;
            <routerLink to="/about">About</routerLink>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'AppNav'
}
</script>

<style lang="less" scoped>
.app-nav {
    background-color: cadetblue;

    .routerLink {
        padding: 10px;
    }
}
</style>