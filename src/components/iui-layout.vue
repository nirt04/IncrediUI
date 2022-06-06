<template>
  <div class="iui-layout" :style="layoutStyle">
    <div v-if="$slots.side" class="side" :style="sideStyle">
      <slot name="side" />
    </div>
    <div v-if="$slots.header" class="header">
      <slot name="header"> header </slot>
    </div>
    <div class="main">
      <slot />
    </div>
    <div v-if="$slots.footer" class="footer">
      <slot name="footer">footer</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iui-layout',
  props: {
    side: {
      type: Boolean,
    },
    miniWidth: {
      type: Number,
    },
    sideWidth: {
      type: Number,
    },
  },
  computed: {
    sideMinWidth() {
      return this.miniWidth ? this.miniWidth : 0;
    },
    layoutStyle() {
      const leftPadding = `${this.side ? this.sideWidth : this.sideMinWidth}px`;
      return {
        maxWidth: `calc(100% - ${leftPadding})`,
        padding: `0px 0px 0px ${leftPadding}`,
      };
    },
    sideStyle() {
      const curSideWidth = this.side ? this.sideWidth : this.sideMinWidth;
      const left = this.side ? '0px' : `-${this.miniWidth ? curSideWidth : this.sideWidth}px`;
      return {
        width: `${this.sideWidth}px`,
        left,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$default-transition: all 0.3s;

.iui-layout {
  display: inline-flex;
  width: 100%;
  height: 100%;
  transition: $default-transition;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  .side {
    transition: $default-transition;
    position: absolute;
    height: 100%;
    overflow: auto;
  }
  .main {
    overflow: auto;
    flex-grow: 1;
  }
}
</style>
