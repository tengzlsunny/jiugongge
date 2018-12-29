<template>
  <div class="jgg_index_bk">
    <div class="sweepstake_jgg">
      <ul>
        <li
          v-for="(v, i) in jggData"
          :key="i"
          :data-index="i"
          :class="jggClass[i]"
          @click="jggbtn(i)"
        >
          <img :src="v.prize_pic" alt>
          <p>{{ v.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import img1 from "../assets/imgs/img1.png";
import img2 from "../assets/imgs/img2.png";
import img3 from "../assets/imgs/img3.png";
import img4 from "../assets/imgs/img4.png";
import img5 from "../assets/imgs/img5.png";
import img6 from "../assets/imgs/img6.png";
import img7 from "../assets/imgs/img7.png";
import img8 from "../assets/imgs/img8.png";
import img9 from "../assets/imgs/img9.png";
export default {
  data() {
    return {
      jggData: [
        {
          prize_pic: img1,
          name: "1元红包"
        },
        {
          prize_pic: img2,
          name: "5元红包"
        },
        {
          prize_pic: img3,
          name: "10诺豆"
        },
        {
          prize_pic: img4,
          name: "500元红包"
        },
        {
          prize_pic: img5,
          name: ""
        },
        {
          prize_pic: img6,
          name: "信用卡"
        },
        {
          prize_pic: img7,
          name: "生肖卡"
        },
        {
          prize_pic: img8,
          name: "银行卡"
        },
        {
          prize_pic: img9,
          name: "白金卡"
        }
      ],
      jggClass: [
        "jgg0",
        "jgg1",
        "jgg2",
        "jgg8",
        "jgg_btn",
        "jgg4",
        "jgg7",
        "jgg6",
        "jgg5"
      ],
      count: 9, //位置总数
      speed: 10, //初始速度
      timer: 0, //定时器时间
      currentIndex: -1, //转动的当前位置
      rotateNum: 0, //转动次数
      basicCycle: 32, //运动初始次数
      prizePlace: 0, //中奖位置
      isClick: false, //是否重复点击抽奖
      initOppo: 2, //初始抽奖次数
      isStop: false // 防流氓操作
    };
  },
  methods: {
    //初始化方法，点击抽奖事件
    jggbtn(index) {
      let that = this;
      if (that.isStop) {
          return
      }
      if (that.isClick) {
        //防止在转动过程中,重复点击抽奖按钮
        alert("你已用完抽奖次数");
        return false;
      } else {
        that.speed = 100;
        that.rotateNum = 0;
        that.initOppo -= 1;
        that.turning();
        that.isClick = true; //一次完成后，可继续抽
        that.isStop = true
        return false;
      }
    },

    //为即将转到下一个节点添加class:active
    addNextItemClass() {
      let that = this;
      $(".sweepstake_jgg ul").find(".jgg" + this.currentIndex).removeClass("jgg_acitve");
      that.currentIndex += 1;
      if (that.currentIndex >= that.count) {
        that.currentIndex = 0;
      }
      $(".sweepstake_jgg ul").find(".jgg" + this.currentIndex).addClass("jgg_acitve");
    },
    //浮层转动的逻辑都在该方法内实现
    turning() {
      var that = this;
      that.rotateNum += 1;
      that.addNextItemClass();
      //判断是否转动完毕
      if (
        that.rotateNum > that.basicCycle + 7 && that.prizePlace == that.currentIndex
      ) {
            clearTimeout(that.timer)
            setTimeout(() => {
                that.isStop = false
                that.initOppo != 0 ? that.isClick = false : that.isClick = true;
            },1000)
            that.prizePlace = -1;
			that.timer = 0;
      } else {
        //该判断内是对转动速度speed的处理
        if (that.rotateNum < that.basicCycle) {
          that.speed -= 5;
        } else if (that.rotateNum == that.basicCycle) {
            // 此处是随机数获取中奖位置的，在点击抽奖的时候该位置（随机数）就已确定
            that.prizePlace = Math.floor(Math.random() * that.count);
            that.prizePlace = 1
            that.prizePlace == 9 ? that.prizePlace = 0 : that.prizePlace = that.prizePlace;
        } else {
          // 如果中奖位置和当前位置的位差在一到多圈时，加快转动速度
          if (
            (that.rotateNum > that.basicCycle + 7 &&
              (that.prizePlace == 0 && that.currentIndex == 7)) ||
            that.prizePlace == that.currentIndex + 1
          ) {
            that.speed += 100;
          } else {
            that.speed += 20;
          }
        }
        // 此处做匀速阶段的处理
        if (that.speed < 50) {
          that.speed = 50;
        }
        // 定时器做整个转动处理
        that.timer = setTimeout(that.turning.bind(this), that.speed); //此处使用bind(),防止setTimeout改变this的指向
      }
      return false;
    }
  }
};
</script>
<style scoped lang="scss">
.jgg_index_bk {
  width: 100%;
  overflow: hidden;
  .sweepstake_jgg {
    width: 650px;
    height: 650px;
    margin: 55px auto 60px;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      li {
        width: 205px;
        height: 205px;
        background-image: url("../assets/imgs/jgg_1.png");
        background-repeat: no-repeat;
        background-size: cover;
        img {
          display: block;
          width: 118px;
          height: 99px;
          margin: 36px auto 10px;
        }
        p {
          text-align: center;
          font-size: 24px;
          color: #98520e;
        }
      }
      .jgg_btn {
        background-image: url("../assets/imgs/jgg_2.png");
        img {
          display: none;
        }
        p {
          display: none;
        }
      }
      .jgg_acitve {
        background-image: url("../assets/imgs/jgg_3.png");
      }
    }
  }
}
</style>


