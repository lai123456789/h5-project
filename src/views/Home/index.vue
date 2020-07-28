<template>
  <div class="index-ctr">
    <div class="main">
      <div class="mainTop">
        <img src="../../image/mainTop1.png" alt="" class="mainTopImg">
        <div class="dengLeft">
          <img src="../../image/deng.png" alt="" class="">
        </div>
        <div class="dengRight">
          <img src="../../image/deng.png" alt="" class="">
        </div>
        <img src="../../image/maintitle.png" alt="" class="bigTextImg">
        <img src="../../image/subtitle.png" alt="" class="smallTextImg">
        <img src="../../image/jinbi.png" alt="" class="jinbiImg">
        <img src="../../image/redcolor.png" alt="" class="redImg">
        <img src="../../image/redBag.png" alt="" class="redBagImg">
        <img src="../../image/weidati.png" alt="" class="weidati" @click="dati" v-show="show">
        <img src="../../image/dati.png" alt="" class="weidati" @click="dati" v-show="!show">
      </div>
      <div style="height: 0.2rem;width: 100%;background: #3B42CC !important;"></div>
      <div class="mainBottom">
        <div class="bottomIndex">
          <img src="../../image/t11.png" alt="">
          <img src="../../image/t22.png" alt="">
          <img src="../../image/t33.png" alt="">
        </div>
      </div>


    </div>

  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'Error',
  data () {
    return {
      show:true,
    }
  },
  components: {},
  methods: {
    dati(){
      this.show = !this.show
    }
  },
  watch: { },
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
