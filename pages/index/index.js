//index.js
const PAGE_RANGE = 2;

Page({
  data: {
    pages_array: [],
    current_page: 0
  },
  onLoad: function() {
    this.calculate_pages_array();
  },
  on_swiper_change: function({ detail: { current: current_page } }) {
    this.setData({
      current_page
    });
    this.calculate_pages_array();
  },
  calculate_pages_array: function() {
    const pages_array = [];
    const { current_page } = this.data;
    for(let i=0; i < 359; i++) {
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
