<template>
    <div class="homeContainer">
        home-page
        <div>{{ msg }}</div>
        <div>使用二次封装axios请求数据</div>
        <ul>
            <li v-for="item in categoryList" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Home',
    computed: {
        ...mapState('homeStore', ['msg', 'categoryList'])
    },
    mounted() {
        this.getAllCategory()
    },
    methods: {
        getAllCategory() {
            this.$store.dispatch('homeStore/getAllCategory')
        }
    }
}
</script>

<style lang="less" scoped>

</style>