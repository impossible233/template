<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="复制功能" name="directly">
        <el-input
          v-model="inputData"
          placeholder="Please input"
          style="width: 400px; max-width: 100%"
        />
        <el-button
          type="primary"
          icon="el-icon-document"
          @click="handleCopy(inputData, $event)"
        >
          复制
        </el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import clip from '@/utils/clipboard' // use clipboard directly


export default {
  name: 'ClipboardDemo',

  data() {
    return {
      activeName: 'directly',
      inputData: 'https://www.taobao.com/'
    }
  },
  methods: {
    handleCopy(text, event) {
      clip(text, event)
    },
    clipboardSuccess() {
      this.$message({
        message: 'Copy successfully',
        type: 'success',
        duration: 1500
      })
    }
  }
}
</script>

