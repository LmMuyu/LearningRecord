<script>
import { mapMutations } from "vuex";

export default {
  onLaunch: function() {
    // this.getLogo();
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
/**colorui */
@import "./static/css/animation.css";
@import "./static/css/icon.css";
@import "./static/css/main.css";
@font-face {
  font-family: "iconfont"; /* project id 1810160 */
  src: url("https://at.alicdn.com/t/font_1810160_ry3xyghrjqd.eot");
  src: url("https://at.alicdn.com/t/font_1810160_ry3xyghrjqd.eot?#iefix")
      format("embedded-opentype"),
    url("https://at.alicdn.com/t/font_1810160_ry3xyghrjqd.woff2")
      format("woff2"),
    url("https://at.alicdn.com/t/font_1810160_ry3xyghrjqd.woff") format("woff"),
    url("https://at.alicdn.com/t/font_1810160_ry3xyghrjqd.ttf")
      format("truetype"),
    url("https://at.alicdn.com/t/font_1810160_ry3xyghrjqd.svg#iconfont")
      format("svg");
}
</style>
