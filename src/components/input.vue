<template>
  <div class="input-wrap">
    <img v-if="location"
    class="location-label"
    :src="`${publicPath}images/location-icon.svg`" alt="">
    <input
    :type="type"
    :placeholder="placeholder"
    v-model="value"
    v-on:input="$emit('change-my-input', value)"
    >
  </div>
</template>

<script>
export default {
  name: 'cInput',
  props: {
    name: String,
    type: String,
    placeholder: String,
    location: Boolean,
    search: String,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      value: '',
    };
  },
};
</script>

<style scoped lang="scss">
.input-wrap{
  position: relative;
  min-width: 48%;
}
.search-form input{
  margin: 0;
}
    .location-label{
        position: absolute;
        z-index: 1000;
        width: 8px;
        height: 11px;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        display: block;
    }
    .location-label+input{
      padding-left: 40px;
    }
</style>
