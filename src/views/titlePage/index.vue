<template>
  <div class="title-ctr"  @click="toTitlePageNext">
    <div>
<!--      {{getDateA.text}}-->
<!--      <div>-->
        <p>11月12日起，</p>
        <p>两期作品将汇集展览一年，</p>
        <p>欢迎随时扫码观览</p>
<!--      </div>-->
<!--      <p>{{getDateA.date}}</p>-->
    </div>
    <img src="../../image/animateRight.png" alt="">
  </div>

</template>

<script>
    import { getDateApiF} from "../../service/requestFun";
    import dateFormat from '../../utils/dateFormat'
    // @ is an alias to /src
    export default {
        name: 'Error',
        data () {
            return {
                getDateA:""
            }
        },
        components: {},
        methods: {
            toTitlePageNext() {
                this.$router.push({
                    name: "titlePageNext"
                });
            },
            getDate(){
                let t = this
                getDateApiF().then(res => {
                    console.log(res)
                    t.getDateA = res
                }).catch(err => {
                })
            }
        },
        watch: { },
        mounted () {
            this.getDate()
        }
    }
</script>

<style lang="scss" scoped>
  @import './index'
</style>
