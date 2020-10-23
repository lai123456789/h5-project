<template>
  <div class="index-ctr">
    <van-popup v-model="show">
        <img src="../../image/left.png" alt="" @click="jump(showParam,'prev')">
        <div class="p-content" :class="type == 2?'alitem':''">  <!--摄影的时候才加上这个居中样式-->
          <div class="index">
            <div class="p1">
              <img :src="domain + showParam.src" alt="">
            </div>
            <div class="p2">

              <div class="p2-content">
                <div>
                  <p>作者：<span>{{showParam.name}}</span></p>
                  <p>年龄：<span>{{showParam.age}}岁</span></p>
                  <p>退休单位：<span>{{showParam.source}}</span></p>
                </div>
              </div>


              <div @click="close">关闭</div>
            </div>
          </div>

        </div>
        <img src="../../image/right.png" alt="" @click="jump(showParam,'next')">
    </van-popup>
    <div class="main-top">
      <p>{{getDateA.title}}</p>
      <img src="../../image/opus_shufa.png" alt="" v-if="type == 1">
      <img src="../../image/opus_huihua.png" alt="" v-if="type == 0">
      <img src="../../image/opus_sheying.png" alt="" v-if="type == 2">
      <div>
        <img src="../../image/search.png" alt="">
        <input type="text" placeholder="可通过关键词搜索相关展品" v-model="searchName" @input="clickAll">
      </div>
    </div>
    <div class="content">
      <div class="List">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多作品了" @load="onLoad">
          <div class="item" @click="Info(item)" v-for="item in List">
            <img :src="domain + item.thumb_src" alt="">
            <div>
              <p v-if="type == 2" class="name">{{item.photo_name}}</p>
              <p class="author">作者：{{item.name}}</p>
            </div>
          </div>
        </van-list>

      </div>


    </div>

  </div>
</template>

<script>
    import dateFormat from '../../utils/dateFormat'
    import { photoListApiF,searchApiF,jumpApiF,getDateApiF} from "../../service/requestFun";
    import debounce from "../../utils/debounce";
    import axios from 'axios';
    // @ is an alias to /src
    export default {
        name: 'opusList',
        data () {
            return {
                getDateA:"",
                domain:"http://www.aedkt.com/lgb",
                showParam:{},
                show:false,
                type:"",
                List:[],
                searchName:'',
                loading: false,
                finished: false,
                page:0,
                Id:""
            }
        },
        components: {},
        methods: {
            getDate(){
                let t = this
                getDateApiF().then(res => {
                    console.log(res)
                    t.getDateA = res
                }).catch(err => {
                })
            },
            jump(e,name){
                if(name == "prev"){
                    this.Id = Number(this.Id)-1
                }
                if(name == "next"){
                    this.Id = Number(this.Id)+1
                }
                let param = {
                    type:this.type,
                    Id:this.Id
                }
                jumpApiF(param).then(res => {
                    console.log(res)
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
            Info(item){
                console.log(item)
                this.Id = item.Id
                this.showParam = item
                this.show = !this.show
            },
            close(){
                this.show = !this.show
            },
            getList(){
                let parame = {
                    page:this.page, //第几页 第一页为0
                    type:this.type, //作品类型 （0绘画、1书法、2摄影）
                }
                photoListApiF(parame).then(res => {
                    this.loading = false
                    this.page++
                    console.log(this.page)
                    let {thumb_src,src,source,
                        age,name,photo_name,Id} = res
                    // this.List = []
                    for(let x in source){
                        let object = {
                            thumb_src:thumb_src[x],
                            src:src[x],
                            source:source[x],
                            age:age[x],
                            name:name[x],
                            photo_name:photo_name[x],
                            Id:Id[x]
                        }
                        this.List = this.List.concat(object)
                    }
                    console.log(this.List)

                    if(source.length == 0){
                        console.log("没有哦发安慰法安慰额")
                        this.finished = true //停止分页
                    }

                })
                    .catch();
            },
            onLoad(){
                setTimeout(() => {
                    console.log("加载")
                    this.getList()
                    this.loading = true
                },500)
            },
            clickAll: debounce(function() {   //防抖函数  500毫秒执行一次
                let name = this.searchName
                if(name == "" || name == null){
                    this.List = []
                    this.page = 0
                    this.finished = false
                    this.getList()
                    return
                }
                let search = {
                    name:name
                }
                searchApiF(search).then(res => {
                    this.List = []
                    let {thumb_src,src,source,
                        age,name,Id} = res
                    for(let x in source){
                        let object = {
                            thumb_src:thumb_src[x],
                            src:src[x],
                            source:source[x],
                            age:age[x],
                            name:name[x],
                            Id:Id[x]
                        }
                        this.List = this.List.concat(object)
                    }
                }).catch(err => {
                    console.log(err)
                })
            }, 1000)
        },
        watch: { },
        mounted () {
            this.type = this.$route.query.index  //根据index  0是绘画 1表示书法  2是摄影
            this.getDate()
            // if(this.type == 0){
            //     document.title = "绘画作品展"
            // }else if(this.type == 1){
            //     document.title = "书法作品展"
            // }else{
            //     document.title = "摄影作品展"
            // }

        }
    }
</script>

<style lang="scss" scoped>
  @import './index'
</style>
