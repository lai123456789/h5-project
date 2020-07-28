<template>
  <div class="index-ctr">
    <!--自定义过渡类名
      enter-class
      enter-active-class
      enter-to-class (2.1.8+)
      leave-class
      leave-active-class
      leave-to-class (2.1.8+)
  -->
    <button @click="btnClick">change</button>
    <transition
      name="fade"
      enter-active-class="active"
      leave-active-class="leave"
    >
      <div v-if="show">hello</div>
    </transition>
    <hr>
    <transition
      name="fade2"
      enter-active-class="animated swing"
      leave-active-class="animated shake"
    >
      <div v-if="show">hello</div>
    </transition>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'Error',
  data () {
    return {
      show:true
    }
  },
  components: {},
  methods: {
    btnClick:function () {
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
