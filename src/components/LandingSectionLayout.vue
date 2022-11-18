<template>
  <div class="landing-section-bg full-height" :id="sectionName">
    <div class="landing-section-corpus full-height">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "LandingSectionLayout",
  props: {
    sectionName: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.full-height {
  min-height: 100vh;
}
.landing-section-bg {
  background: url("../assets/res") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.landing-section-corpus {
  width: 94vw;
  margin: 0 3%;
}
</style>
