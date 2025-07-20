<template>
  <div :style="cardStyle" class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      required: true
    }
  },
  computed: {
    cardStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`,
      };
    }
  }
};
</script>

<style scoped>
.card {
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    background-size: cover;
    transition: transform 0.3s ease;
}
</style>
