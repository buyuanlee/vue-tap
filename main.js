let view = new Vue({
  el:'#app',
  data:{
    selected:0
  },
  template:`
  <div id="container">
    <div class="btns">
      <button v-bind:class="{active:selected ===0}"
      v-on:click="selected =0">1</button>
      <button v-bind:class="{active:selected ===1}"
      v-on:click="selected =1">2</button>
      <button v-bind:class="{active:selected ===2}"
       v-on:click="selected =2">3</button>
    </div>
    <div class="part" id="part1" v-show="selected === 0"></div>
    <div class="part" id="part2" v-show="selected === 1"></div>
    <div class="part" id="part3" v-show="selected === 2"></div>
  </div>
  `,
  methods:{

  }
})
