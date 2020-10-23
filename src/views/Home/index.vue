<template>
  <div class="index-ctr">

    <div class="main-top">
      <img src="../../image/banner.png" alt="">
    </div>
    <div class="content">
      <div class="mainTitle">
        <div @click="toList('1')">
          <img src="../../image/shufa_icon.png" alt="">
          <p>书法</p>
        </div>
        <div @click="toList('0')">
          <img src="../../image/huihua_icon.png" alt="">
          <p>绘画</p>
        </div>
        <div @click="toList('2')">
          <img src="../../image/sheying_icon.png" alt="">
          <p>摄影</p>
        </div>
      </div>
      <div class="shufa">
        <div class="ctnTop"  @click="toList('1')">
          <img src="../../image/shufa_text.png" alt="">
          <p>了解更多 ></p>
        </div>
        <div class="ctnContent">
          <img src="../../image/shufa1.png" alt="" @click="search('黄水桂',1)">
          <img src="../../image/shufa2.png" alt="" @click="search('戴汉辉',1)">
          <img src="../../image/shufa3.png" alt="" @click="search('黄金友',1)">
        </div>
      </div>
      <div class="huihua">
        <div class="ctnTop"  @click="toList('0')">
          <img src="../../image/huihua_text.png" alt="">
          <p>了解更多 ></p>
        </div>
        <div class="huihuaContent">
          <div class="huihuaItem"  @click="search('王鲁',0)">
            <img src="../../image/huihua2.png" alt="">
            <div>
              <p></p>
              <p>作者：王鲁</p>
            </div>
          </div>
          <div class="huihuaItem"  @click="search('叶素群',0)">
            <img src="../../image/huihua1.png" alt="">
            <div>
              <p></p>
              <p>作者：叶素群</p>
            </div>
          </div>

        </div>
      </div>
      <div class="sheying">
        <div class="ctnTop"  @click="toList('2')">
          <img src="../../image/sheying_text.png" alt="">
          <p>了解更多 ></p>
        </div>
        <div class="sheyingContent">
          <img src="../../image/loveChina.jpg" alt=""  @click="search('黄天肇',2)">
          <img src="../../image/daqiao.jpg" alt="" @click="search('黄伟杰',2)">
          <img src="../../image/gangwan.jpg" alt="" @click="search('刘小奕',2)">
          <img src="../../image/huihuang.jpg" alt="" @click="search('刘小奕',2,'another')">
        </div>
      </div>

    </div>
    <van-popup v-model="show">
      <div class="all">
        <img src="../../image/left.png" alt="" @click="jump(showParam,'prev')">
        <div class="p-content"  :class="type == 2?'alitem':''">
          <div class="index">
            <div class="p1">
              <img :src="domain + showParam.src" alt="">
            </div>
            <div class="p2">
              <div>
                <p>作者：<span>{{showParam.name}}</span></p>
                <p>年龄：<span>{{showParam.age}}岁</span></p>
                <p>退休单位：<span>{{showParam.source}}</span></p>
              </div>
              <div @click="close">关闭</div>
            </div>
          </div>

        </div>
        <img src="../../image/right.png" alt="" @click="jump(showParam,'next')">

      </div>

    </van-popup>
  </div>
</template>

<script>
    import { searchApiF,jumpApiF} from "../../service/requestFun";

// @ is an alias to /src
export default {
  name: 'Error',
  data () {
    return {
        domain:"http://www.aedkt.com/lgb",
        showParam:{},
        show:false,
        Id:"",
        type:""
    }
  },
  components: {},
  methods: {
      jump(e,name){
          if(name == "prev"){
              this.Id = Number(this.Id)-1
          }
          if(name == "next"){
              this.Id = Number(this.Id)+1
          }
          let param = {
              type:this.type,//0是绘画 1表示书法  2是摄影
              Id:this.Id
          }
          jumpApiF(param).then(res => {
              if(res.name[0] == "null" || res.name[0] == null){
                  this.$toast('暂无更多信息')
                  return
              }
              let object = {
                  thumb_src:res.thumb_src[0],
                  src:res.src[0],
                  source:res.source[0],
                  age:res.age[0],
                  name:res.name[0],
                  photo_name:res.photo_name[0],
              }
              console.log(object)
              this.showParam = {}
              this.showParam = object
          }).catch(err => {
          })
      },

      close(){
          this.show = !this.show
      },
      search(name,index,another){
          let par = {
              name:name
          }
          this.type = index
          let t = this
          searchApiF(par).then(res => {
              t.show = !t.show
              console.log(res)
              t.showParam = {
                  thumb_src:res.thumb_src[0],
                  src:another?res.src[1]:res.src[0],
                  source:res.source[0],
                  age:res.age[0],
                  name:res.name[0],
                  Id:res.Id[0]
              }
              t.Id = res.Id[0]
              console.log(t.showParam)
          }).catch(err => {
              console.log(err)
          })
      },
      toList(index){
            // if(item.id == 1){
            //     this.$router.push({
            //         path: `/meetSummary`
            //     });
            // this.$router.push({
            //     path: `/detailA/${item.id}`
            // });
            // } else {
            //     this.$router.push({
            //         path: `/activitedInfo`,
            //         query: {
            //             activityId: item.id //传id 路由跳转详情页activitedInfo
            //         }
            //     });
            // }
            this.$router.push({
                path: `/opusList`,
                query: {
                    index:index
                }
            });
      }
  },
  watch: { },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
