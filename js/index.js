var vue = new Vue({
  data: function(){
    return{
      // 工作内容显示控制
      showCont: false,
      //每个循环值
      showImg: 0,
      //setInterval控制器
      timer:null,
      navButton:[
        '工作','技能','教育','首页',
      ],
      eduBackgrounds: [
        {
          school: '西安交通大学网络教育学院',
          profession: '会计专业',
          year: '2014.3-2016.7'
        },
        {
          school: '湖南永州市湘南职业技术学校',
          profession: '电子技术',
          year: '2008.9-2011.1'
        },
        {
          school: '湖南祁阳县陶铸中学',
          profession: '高中',
          year: '2005.9-2008.6'
        }
      ],
      skillArr:[
        '1.熟悉Javascript、css3和html5并能熟练运用实现网页常用特效，掌握面向对象编程思想',
        '2.熟悉vue前端框架，了解Nodejs以及less、git、github等技术和团队协作开发工具',
        '3.具备抗压能力、且有一定自学能力，能够熟练阅读使用中文API，英文API可以大概看懂并运用',
      ],
      workExperience: [
        {
          company: '深圳市中石化深燃天然气有限公司',
          job: '运营班长',
          inservice: '2013.05-2018.01',
          content:
          `
          <p>1.负责对本班人员管理，包括值班管理，技术指导，安全教育，
          带领全班人样做好安全文明生产，优质服务。</p>
          <p>2.做好本班人员配置，并提出考核意见。负责设备检查，交接班，
          值班记录，指挥本班人员正常完成加气任务。</p>
          `
        },
        {
          company: '深圳市城建物业管理有限公司',
          job: '维修电工',
          inservice: '2011.07-2012.06',
          content:
          `
          <p>1、负责所辖区域水电设备的日常检查、保养工作。</p>
          <p>2、掌握区域水电设备运行和照明情况，独立完成一般水电维修工作。</p>
          <p>3、负责填写工作交接簿和设备运行记录，认真安排好预防性维修计划,严把质量关。</p>
          `
        }
      ]
    }
  },
  methods: {
    //鼠标滚轮事件兼容处理
    getWheelDelta(event) {
      if (event.wheelDelta) {
        // 第一次调用之后惰性载入
        this.getWheelDelta = event => event.wheelDelta;
  
        // 第一次调用使用
        return event.wheelDelta;
      } else {
        // 兼容火狐
        this.getWheelDelta = event => -event.detail;
        return -event.detail;
      }
    },
    // 截流函数，method 回调函数，context 上下文，delay 延迟函数，
    // 这里没有提供是在延迟时间开始还是结束的时候执行回调函数的选项，
    // 直接在延迟时间开始的时候执行回调
    //handleMouseWheel = this.throttle(this.myScroll, this, this.DELAY, true);
    throttle(method, context, delay) {
      let wait = false;
      return function() {
        if (!wait) {
          method.apply(context, arguments);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, delay);
        }
      };
    },
    
    nextImg(){
      this.showImg++;
      if (this.showImg > this.navButton.length-1){
        this.showImg = 0
      }
    },
    preImg(){
      this.showImg--;
      if (this.showImg < 0){
        this.showImg = this.navButton.length-1
      }
    },
    stop(){
      clearInterval(this.timer);
      this.timer = null;
    },
    auto(){
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.nextImg()
      }, 5000);
    },
    changImg(index){
      clearInterval(this.timer);
        this.showImg = index;
    },
    //鼠标滚动函数
    myScroll(e){
      clearInterval(this.timer);
      // console.log(e.wheelDelta)
      let delta = this.getWheelDelta(e);
      if (delta < 0){
        this.nextImg()
      }else{
        this.preImg();
      }
    },
    // 触屏事件
    handleTouchEnd(event) {
      event.preventDefault();
      clearInterval(this.timer);
      let endY = event.changedTouches[0].pageY;
      if (endY - this.startY < 0) {
        // 手指向上滑动，对应页面向上滚动
        this.preImg();
      } else {
        // 手指向下滑动，对应页面向下滚动
        this.nextImg();
      }
    },
  },
  computed:{
  },
  mounted(){
    //自动运行
    this.$nextTick(()=>{
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.nextImg()
      }, 5000);
    });

    document.addEventListener('dblclick', () => {
      if (this.timer ===null){
        this.auto();
      }else{
        this.stop();
      }
    })

    // 手指接触屏幕
    document.addEventListener('touchstart', event => {
      event.preventDefault();
      this.startY = event.touches[0].pageY;
    });
    //手指离开屏幕
    document.addEventListener('touchend', this.handleTouchEnd);
    // 阻止触屏长按默认事件
    document.addEventListener('touchmove', event => {
      event.preventDefault();
    });

    //挂载鼠标滚轮事件
    let mouseScroll =this.throttle(this.myScroll, this, 900);
    if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
      document.addEventListener('mousewheel', mouseScroll);
    } else {
      document.addEventListener('DOMMouseScroll', mouseScroll);
    };

    console.log(`
  欢迎光临我的主页，恭喜发财，大吉大利。
  本页面支持触摸屏控制，双击暂停动画，再次双击循环。
    `)
  }
}).$mount('#app')
