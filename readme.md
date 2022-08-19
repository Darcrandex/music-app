# 网易云音乐 app

> react + capacitor 混合 app

## 后端

后端服务使用 [网易云音乐 api](https://binaryify.github.io/NeteaseCloudMusicApi/#/)
使用 docker 运行

```shell
docker pull binaryify/netease_cloud_music_api
docker run -d -p 3000:3000 binaryify/netease_cloud_music_api
```

默认暴露 3000 端口,自行修改
本项目使用了 5200 端口

# 图标和闪屏

> [splash-screens-and-icons](https://capacitorjs.com/docs/guides/splash-screens-and-icons)

图片要求:

1. icon 大小 1024\*1024, 不能有透明部分
2. splash 大小 2732\*2732
