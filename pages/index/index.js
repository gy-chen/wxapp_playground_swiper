//index.js
import weSwiper from '../../we-swiper/dist/weSwiper';

const PAGE_RANGE = 2;
const PAGE_TOTAL = 359;

Page({
  data: {
    pages_array: [],
    current_page: 0
  },
  onLoad: function() {
    this.calculate_pages_array();
    let self = this;
    new weSwiper({
      animationViewName: 'animationData',
      slideLength: PAGE_TOTAL,
      initialSlide: 0,
      onSlideChangeStart (weswiper) {
        self.on_swiper_change(weswiper.activeIndex);
      }
    });
  },
  touchstart (e) {
    this.weswiper.touchstart(e)
  },
  touchmove (e) {
    this.weswiper.touchmove(e)
  },
  touchend (e) {
    this.weswiper.touchend(e)
  },
  on_swiper_change: function(current_page) {
    this.setData({
      current_page
    });
    this.calculate_pages_array();
  },
  calculate_pages_array: function() {
    const pages_array = [];
    const { current_page } = this.data;
    for(let i=0; i < PAGE_TOTAL; i++) {
      let image_path = null;
      if (current_page - PAGE_RANGE <= i && i <= current_page + PAGE_RANGE) {
        image_path = `/images/lfs-${i}.jpg`;
      }
      pages_array.push(image_path);
    }
    this.setData({
      pages_array
    });
  }
})
