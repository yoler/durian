// eslint-disable-next-line no-undef
export default defineAppConfig({
  pages: ["pages/index/index", "pages/sentence/index", "pages/article/index"],
  window: {
    backgroundColor: "#f6f6f6",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "#f6f6f6",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: false,
    selectedColor: "#ff6c6d",
    list: [
      {
        pagePath: "pages/index/index",
        text: "诗词",
        iconPath: "images/1-modified.png",
        selectedIconPath: "images/1.png",
      },
      {
        pagePath: "pages/sentence/index",
        text: "短句",
        iconPath: "images/2-modified.png",
        selectedIconPath: "images/2.png",
      },
      {
        pagePath: "pages/article/index",
        text: "短文",
        iconPath: "images/3-modified.png",
        selectedIconPath: "images/3.png",
      },
    ],
  },
});
