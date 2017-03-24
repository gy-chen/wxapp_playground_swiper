//index.js
Page({
  data: {
    pages_array: []
  },
  onLoad: function() {
    let pages_array = [];
    for(let i=0; i < 12; i++) {
      pages_array.push(`/images/lfs-${i}.jpg`);
    }
    this.setData({
      pages_array
    });
  }
})
