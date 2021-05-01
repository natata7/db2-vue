<template>
  <div class="home">
    <Header v-bind:signup='false'/>
    <SignupPswForm />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue';
import SignupPswForm from '@/components/SignupPswForm.vue';

export default {
  name: 'signup-complete',
  metaInfo: {
    title: 'Signup Almost Complete',
    titleTemplate: '%s | DB2 app',
  },
  props: {
    title: String,
  },
  components: {
    Header,
    SignupPswForm,
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
