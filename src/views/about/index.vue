<template>
    <div class="aboutContainer">
        about-page
        <div>{{ msg }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'About',
    computed: {
        ...mapState('aboutStore', ['msg'])
    }
}
</script>

<style lang="less" scoped>

</style>