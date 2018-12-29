# 九宫格活动

1. jggIndex.vue 主页面
imgs文件夹：放图片

```
    var width = docEl.getBoundingClientRect().width;
        // if (width / dpr > 540) {
        //     width = 540 * dpr;
        // }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }
备注：node_modules/lib-flexible/flexible.js 将判断注释了
