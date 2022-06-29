Vue.createApp({
  data: function () {
    return {
      message: 'bindbind',
      imgSrc: 'mainbnr.jpg',
      isDisabled: 0,
      imgSize: 0.8,
      imgStyle: '',
      isActive: 0,
      isShow: 10,
      items: ['item01', 'item02', 'item03'],
      values: {
        カテゴリ1: '駅',
        カテゴリ2: '道',
      },
    };
  },
  methods: {
    changeImg: function (event) {
      this.imgSrc = 'medal_ribbon_icon.png';
      this.imgSize = 0.9;
    },
    changeClass: function () {
      if (this.isActive == true) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    },
  },
  computed: {
    changeImgStyle: function () {
      return (this.imgStyle = 'transform:scale(' + this.imgSize + ')');
    },
    className: function () {
      return { 'is-active': this.isActive, 'is-inactive': !this.isActive };
    },
  },
}).mount('#app');
