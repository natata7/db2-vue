<template>
  <div class="input-wrap">
    <select v-model="selected">
      <option disabled value="">Select</option>
      <option v-for="option in options" v-bind:value="value"
      v-bind:key="option.text">
        {{ option.text }}
        {{ option }}
        {{ data }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'input',
  props: {
    name: String,
    options: Array,
    value: String,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="scss">
.input-wrap{
  position: relative;
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
