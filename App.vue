<script>
import { mapMutations } from "vuex";

export default {
  onLaunch: function() {
    this.getLogo();
  },
  onShow: function() {},
  onHide: function() {
    console.log("App Hide");
  },
  methods: {
    ...mapMutations(["setHomeImage"]),

    async getLogo() {
      let {
        result: {
          fileList: [{ tempFileURL }]
        }
      } = await uniCloud.callFunction({
        name: "template"
      });

      //写入vuex
      this.setHomeImage(tempFileURL);
    }
  }
};
</script>

<style>
/*每个页面公共css */
@import "./common/index.css";
@import "./common/normalize.css";
@font-face {
  font-family: "iconfont"; /* project id 1810160 */
  src: url("https://at.alicdn.com/t/font_1810160_oi7ayuunkyb.eot");
  src: url("https://at.alicdn.com/t/font_1810160_oi7ayuunkyb.eot?#iefix")
      format("embedded-opentype"),
    url("https://at.alicdn.com/t/font_1810160_oi7ayuunkyb.woff2")
      format("woff2"),
    url("https://at.alicdn.com/t/font_1810160_oi7ayuunkyb.woff") format("woff"),
    url("https://at.alicdn.com/t/font_1810160_oi7ayuunkyb.ttf")
      format("truetype"),
    url("https://at.alicdn.com/t/font_1810160_oi7ayuunkyb.svg#iconfont")
      format("svg");
}
</style>
