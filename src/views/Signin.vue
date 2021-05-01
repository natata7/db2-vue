<template>
  <div class="home">
    <Header v-bind:signup='true'/>
    <SigninForm />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue';
import SigninForm from '@/components/SigninForm.vue';

export default {
  name: 'Signin',
  metaInfo: {
    title: 'Signin',
    titleTemplate: '%s | DB2 app',
  },
  props: {
    title: String,
  },
  components: {
    Header,
    SigninForm,
  },
};
</script>

<style lang="scss" scoped>
.header{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    max-width: $max-width;
    margin: 0 auto;
    padding: 10px 0;
    z-index: 1000;
    position: relative;

    @media (min-width: $screen-sm) {
        flex-direction: row;
    }

    .logo{
        padding: 10px 25px;
    }

    .signup{
        display: flex;
        align-items: center;
        font-family: $main-font;
        font-size: $font-size;
        padding: 10px 25px;

        &__link{
            color: $color-blue;
            font-weight: 600;
            margin: 0 5px;
            text-decoration: none;
        }
    }
}
</style>
