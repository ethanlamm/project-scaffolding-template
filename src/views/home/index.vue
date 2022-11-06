<template>
    <div class="homeContainer">
        home-page
        <div>{{ msg }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Home',
    computed: {
        ...mapState('homeStore', ['msg'])
    }
}
</script>

<style lang="less" scoped>

</style>