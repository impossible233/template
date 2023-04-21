<template>
  <Video
    v-show="true"
    :videoSrc="videoSrc"
    :videoPoster="videoPoster"
    :width="1200"
    :height="500"
    :autoplay="true"
    :controls="true"
    :loop="false"
    :muted="false"
    preload="auto"
    :showPlay="true"
    :playWidth="96"
    zoom="contain"
  />
</template>

<script>

import Video from './video'
export default {
  components: {
    Video
  },
  data() {
    return {
      // 视频链接支持https或require本地地址
      videoSrc: require('@/assets/video/画江湖mv.mp4'),
      // 视频封面支持https或require本地地址
      videoPoster: require('@/assets/video/fengmian.jpg')
    }
  }


}
</script>

<style>
</style>
