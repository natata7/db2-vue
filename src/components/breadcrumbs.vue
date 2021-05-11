<template>
<ul class="breadcrumbs" v-if="stack.length">
    <li class="breadcrumbs-item">
        <router-link to="/profile">Home</router-link>
    </li>
    <li v-for="item in stack" :key="item.id" class="breadcrumbs-item">
        <router-link :to="{ name: item.path }" class="crumbs__link">
            {{ item.label }}
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'Crumbs',
  data() {
    return { stack: [] };
  },
  mounted() {
    this.buildStack();
  },
  methods: {
    buildStack() {
      this.stack = [];
      this.addPage(this.$router.currentRoute);
      this.stack = this.stack.reverse();
    },
    addPage(route, first) {
      this.stack.push({
        name: this.$route.name,
        label: this.$route.meta?.breadcrumb?.label || this.$route.name.replace('.', ' '),
        class: `crumbs__item--${typeof first === 'undefined' ? 'current' : 'parent'}`,
      });
    },
    getRoute(name) {
      return this.$router.options.routes.find((route) => route.name === name);
    },
  },
};
</script>
<style lang="scss" scoped>
.breadcrumbs{
    display: flex;
    height: 100%;
    margin: 0;

    .breadcrumbs-item{
        list-style: none;
        align-self: center;
        display: flex;
        align-items: center;
        padding-right: 10px;

        a{
            font-weight: 400;
            color: #000000;
        }

        &::after{
            background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="6px" height="9px" viewBox="0 0 6 9" fill="none"><path d="M1.13514 -0.000183105L4.85176e-08 0.985687L3.72973 4.22498L4.85176e-08 7.46426L1.13514 8.45014L6 4.22498L1.13514 -0.000183105Z" fill="%230AD69C"/></svg>');
            width: 6px;
            content: '';
            height: 8px;
            display: block;
            margin-left: 10px;
        }
        &:last-of-type::after{
            display: none;
        }
    }
}
</style>
