<template>
  <div class="contact">
    <h1>contact us with {{ msg }}</h1>
    <div v-text="vtext"></div>       
    <p>v-model:<input type="text" v-model="mdmsg" /></p>
    <button v-on:click="hidebtn">隐藏按钮</button>
    <button @mouseover="overbtn">鼠标移动</button><span v-if="isShow">can you see me</span><br />
    <p>v-model:<input type="text" v-model="tdmsg" /></p>
  </div>
</template>

<script>
export default {
  name: 'contact',
  components: {},
  props: {},
  // data: {
  //   meg: '911',
  //   isShow: false
  // },
  data() {
    return {
      msg: "911",
      vtext: "v-text test",
      isShow: true,
      mdmsg: "",
      tdmsg: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    hidebtn: function () {
      let namelist = this.getnamelist();
      namelist = namelist.replace(/[\r\n]/g, '');
      //namelist = namelist.toString();
      let a = namelist.split(",");
      let b = this.mdmsg;
      let c = "";
      //namelist.split(',');
      console.log(a);
      for (let i in a) {
        if (b.includes(a[i])) {
          console.log("find:" + a[i]);
        } else {
          if (c.length > 0) c = c + "," + a[i];
          else c = a[i];
        }
      }
      console.log("can not find:" + c);
      //this.vtext = "如下同事未提交:" + c;
      this.tdmsg = "如下同事未提交:" + c;
      /*       if(this.isShow)
        this.isShow = false;
      else
        this.isShow = true; */
    },
    overbtn: function () {
      if (this.isShow) this.isShow = false;
      else this.isShow = true;
    },
    getnamelist() {
      let xhr = new XMLHttpRequest();
      let okStatus = document.location.protocol === "file:" ? 0 : 200;
      xhr.open("GET", "../../../nameList.txt", false); // 文件路径
      xhr.overrideMimeType("text/html;charset=utf-8"); //默认为utf-8
      xhr.send(null);
      //console.log(xhr.responseText); //打印文件信息
      return xhr.status === okStatus ? xhr.responseText : null;
    },
  },
  created() {},
  mounted() {},
};
</script>
