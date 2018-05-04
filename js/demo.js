var vue = new Vue({
  data: function(){
    return{
      showCont: null,
      showImg: 0,
      count: 0,
      timer:null,
      imgarr:[
        'background-image:url(./img/bing1.jpg)',
        'background-image:url(./img/bing2.jpg)',
        'background-image:url(./img/bing3.jpg)',
        'background-image:url(./img/bing4.jpg)',
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
      workExperience: [
        {
          company: '深圳市中石化深燃天然气有限公司',
          job: '运营班长',
          inservice: '2013.05-2018.01',
          content:
            `<pre>
    1.负责对本班人员管理，包括值班管理，技术指导，安全教育，
    带领全班人样做好安全文明生产，优质服务。
    2.做好本班人员配置，并提出考核意见。负责设备检查，交接班，
    值班记录，指挥本班人员正常完成加气任务。
            </pre>`
        },
        {
          company: '深圳市城建物业管理有限公司',
          job: '维修电工',
          inservice: '2011.07-2012.06',
          content:
            `<pre>
    1、负责所辖区域水电设备的日常检查、保养工作。
    2、掌握区域水电设备运行和照明情况，独立完成一般水电维修工作。
    3、负责填写工作交接簿和设备运行记录，认真安排好预防性维修计划，
    严把质量关。
            </pre>`
        }
      ]
    }
  },
  methods: {
    showContent: function(num){
      this.showCont = num;
    },
    
    nextImg(){
      this.showImg++;
      if (this.showImg > this.imgarr.length-1){
        this.showImg = 0
      }
    },
    stop(){
      clearInterval(this.timer);
      this.timer = null;
      // console.log('鼠标进来了');
    },
    auto(){
      this.timer = setInterval(() => {
        this.nextImg()
      }, 3000);
      // console.log('鼠标出去了');
    },
    changImg(index){
      this.showImg = index
    },
    myScroll(e){
      // console.log(e.wheelDelta)
      if (e.wheelDelta < 0){
        this.nextImg()
      }else{
        this.showImg--
        if(this.showImg < 0){
          this.showImg = this.imgarr.length-1 
        }
      }
    },
  },
  mounted(){
    this.$nextTick(()=>{
      this.timer = setInterval(() => {
        this.nextImg()
      }, 2000)
    });
    console.log(`
  源代码网址位
  https://github.com/baidonbo/baidonbo.github.io
  欢迎各位联系本人
    `)
  }
}).$mount('#app')
