new Vue({
  el: "#app",
  data: {
    kingaku: 0,
    zandaka: 0,
    kirokus: [],
  },
  methods: {
    nyuukin: function() {
      this.zandaka += Number(this.kingaku)
      this.kirokus.push({
        date: new Date(),
        type: "入金",
        money: this.kingaku,
      })
    },
    syutukin: function() {
      this.zandaka -= Number(this.kingaku)
      this.kirokus.push({
        date: new Date(),
        type: "出金",
        money: this.kingaku,
      })
    },
  },
})
