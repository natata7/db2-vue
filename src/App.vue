<template>
  <div id="app">
      <router-view/>
    <div id="nav">
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/signin">Signin</router-link> |
      <router-link to="/signup-complete">Complete</router-link> |
      <router-link to="/succses">Succses</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/search">Search</router-link>
    </div>
  </div>
</template>

<script>
import { USER_REQUEST } from './store/actions/user';
// import apiService from './services/api';

export default {
  name: 'App',
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | DB2 app',
  },
  //   created() {
  //     if (this.$store.getters.isAuthenticated) {
  //       this.$store.dispatch(store.updateAccountInfo);
  //     }
  //   },
  created() {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(USER_REQUEST);
    }
  },
};
</script>

<style lang="scss">
h1,
h2,
h3,
h4,
h5,
h6{
    font-family: $title-font;
    margin: 0;
}

p,
label{
    color: $text-color;
}

p{
    margin: 0;
}

a{
    text-decoration: none;
    color: $color-main;
    font-weight: 600;
}

p,
a,
label,
ul li,
ol li{
    font-family: $main-font;
    font-size: $font-size;
}

body {
    background-color: #F9FAFC;
    margin: 0;
    padding: 0;
}

.main{
    min-height: 80vh;
    display: flex;
    padding: 0 25px;
}

.content{
    margin: 0 auto;
    max-width: $max-width;
    display: flex;
    height: 87vh;

    &-wrap{
        margin: auto;
    }
}

.envelope,
.message--wrap{
    position: relative;
    margin: auto;
    width: fit-content;
    z-index: 100;
}

.pass-recovery__succses{
    h1,
    p{
        text-align: center;
    }

    .message--title{
        font-family: Exo 2;
        font-style: normal;
        font-weight: 600;
        font-size: 58px;
        line-height: 34px;
        letter-spacing: 0.4px;
        color: $color-main;
    }

    .message--text{
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        letter-spacing: 0.4px;
        color: #000000;
    }
}

.circle-wrap{
    position: absolute;
    overflow: hidden;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

@mixin circle-background{
    background-color: #ffffff;
    opacity: .54;
    transition: all;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    box-shadow: 0px 0px 42px rgba(231, 231, 231, 0.43);
}

.circle-background-1{
    @include circle-background;
    width: 430px;
    height: 430px;
    border-radius: 500px;
    animation: appearance 1s ease-in;
}
.circle-background-2{
    @include circle-background;
    width: 615px;
    height: 615px;
    border-radius: 615px;
    background: rgba(254, 254, 254, 0.54);
    box-shadow: 0px 0px 42px rgba(231, 231, 231, 0.11);
    animation: appearance 2s ease-in;
}
.circle-background-3{
    @include circle-background;
    width: 765px;
    height: 765px;
    border-radius: 765px;
    background: rgba(254, 254, 254, 0.45);
    box-shadow: 0px 0px 42px rgba(231, 231, 231, 0.36);
    animation: appearance 3s ease-in;
}
.circle-background-4{
    @include circle-background;
    width: 900px;
    height: 900px;
    border-radius: 900px;
    background: rgba(254, 254, 254, 0.45);
    box-shadow: 0px 0px 42px rgba(231, 231, 231, 0.13);
    animation: appearance 4s ease-in;
}

@keyframes appearance{
    0% {
        opacity: 0;
    }
    100% {
        opacity: .54;
    }
}

.main-left{
    margin-left: 80px;
}
#nav{
    text-align: center;
    position: relative;
    z-index: 1;

    a{
        font-weight: 400;
    }
}
</style>
