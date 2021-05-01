<template>
  <div class="home">
    <Header v-bind:signup='false'/>
    <main class="main pass-recovery__succses">
        <div class="content">
            <div class="circle-wrap">
                <div class="circle-background-1"></div>
                <div class="circle-background-2"></div>
                <div class="circle-background-3"></div>
                <div class="circle-background-4"></div>
            </div>
            <div class="content-wrap">
                <div class="envelope">
                    <img :src="`${publicPath}images/envelope.svg`"
                            alt="Envelope"
                            class="">
                </div>
                <div class="message--wrap">
                    <h1 class="message--title">You are almost ready to go!</h1>
                    <p class="message--text">Please check your email to activate your account</p>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue';

export default {
  name: 'Succses',
  metaInfo: {
    title: 'Succses',
    titleTemplate: '%s | DB2 app',
  },
  props: {
    title: String,
  },
  components: {
    Header,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
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
        color: #2A74DB;
        margin: 30px 0;
;
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
</style>
