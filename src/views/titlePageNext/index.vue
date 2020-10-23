<template>
  <div class="title-ctr" @click="toTitlePageNext">
    <img src="../../image/comeIn.png" alt="">
  </div>
</template>

<script>
    import dateFormat from '../../utils/dateFormat'
    // @ is an alias to /src
    export default {
        name: 'Error',
        data () {
            return {}
        },
        components: {},
        methods: {
            toTitlePageNext() {
                this.$router.push({
                    name: "Home"
                });
            },
        },
        watch: { },
        mounted () {}
    }
</script>

<style lang="scss" scoped>
  @import './index'
</style>
