const China = require('../geoJson/ChinaGeo2.js')

Page({

  data: {
    scale: 5,
    enableZoom: true,
    showLocation: true,
    polygons: China,
  },

  onLoad: function (options) {
    this.init()
  },

  init() {
    this.getLocation()
  },

  getLocation() {
    wx.getLocation({
      success: res => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude,
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  },

})