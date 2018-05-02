var vue = new Vue({
  data: function(){
    return{
      show: 100,
      count: 1,
      imgarr:['../00IMG/bing1.jpg',
              '../00IMG/bing2.jpg',
              '../00IMG/bing3.jpg',
              '../00IMG/bing4.jpg',
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
        this.show = num
    },
  },
}).$mount('#app')
