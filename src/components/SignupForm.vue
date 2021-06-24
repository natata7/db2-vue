<template>
<main class="main">
        <section class="form-window">
            <h1 class="form-window__title">Sign up</h1>
            <form method="post">
                <p v-if="isError" id="errorBlock">{{errorMsg}}</p>
                <div class="input-wrap__row">
                    <input
                    required
                    id="name"
                    type="name"
                    v-model="fname"
                    v-on:change-my-input="getName"
                    placeholder="Your name" />
                    <input
                    type="last name"
                    id="lastname"
                    v-model="lname"
                    v-on:change-my-input="getSurname"
                    placeholder="Last Name" />
                </div>
  <p class="errorBlock"
  v-if="!$v.fname.minLength">
  Name or surname must have at least {{$v.fname.$params.minLength.min}} letters.</p>
                <input
                    id="username"
                    type="username"
                    v-model="username"
                    v-on:change-my-input="getUsername"
                    placeholder="Username" />
                    <p class="errorBlock"
  v-if="!$v.username.minLength">
  Username must have at least {{$v.username.$params.minLength.min}} letters.</p>
                    <div :class="{ 'form-group-error' : this.$v.email.$error }">
                <input
                    id="email"
                    type="email"
                    v-model="email"
                    v-on:change-my-input="getEmail"
                    placeholder="E-mail" />
                    <p class="errorBlock"
  v-if="!$v.email">
  Please fill the correctly email.</p>
                    </div>

                      <p class="errorBlock"
                      v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
  <p class="errorBlock" v-if="submitStatus === 'PENDING'">Sending...</p>
                <div class="button">
                    <div class="button__wrap">
                        <button
                        @click.prevent="onSubmit"
                        class="submit"
                        title="Get started"
                        >Get started</button>
                    </div>

                </div>
            </form>
        </section>
    </main>
</template>

<script>
// import cInput from '@/components/input.vue';
// import cButton from '@/components/button.vue';
// import apiService from '../services/api';
// import router from '../router';
import { required, minLength } from 'vuelidate/lib/validators';
import Vue from 'vue';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);

export default {
  name: 'signup',
  props: {

  },
  components: {
    // cInput,
    // cButton,
  },
  data() {
    return {
      fname: '',
      lname: '',
      username: '',
      email: '',
      errorMsg: '',
      submitStatus: '',
    };
  },

  validations: {
    fname: {
      required,
      minLength: minLength(4),
    },
    lname: {
      required,
      minLength: minLength(4),
    },
    username: {
      required,
      minLength: minLength(4),
    },
    email: {
      email: minLength(4),
    },
  },
  methods: {
    async onSubmit() {
      const user = {
        fname: this.fname,
        lname: this.lname,
        username: this.username,
        email: this.email,
      };
      console.log('submit!');
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        console.log(user);
        this.$store.commit('updateAccountInfo', {
          fname: this.fname,
          lname: this.lname,
          username: this.username,
          email: this.email,
        });
        this.$router.push('/signup-complete');
      //   await apiService.post('/add', user)
      //     .then((res) => {
      //       console.log(res);
      //       this.$router.push('/signup-complete');
      //     })
      //     .catch((err) => {
      //       alert(err.response.data);
      //     });
      // window.localStorage.setItem('user', JSON.stringify(user));
      // console.log(window.localStorage.getItem('user'));
      }
    },
    getName(data) {
      this.fname = data;
      this.$v.fname.$touch();
    },
    getSurname(data) {
      this.lname = data;
      this.$v.lname.$touch();
      console.log(this.$v);
    },
    getUsername(data) {
      this.username = data;
    },
    getEmail(data) {
      this.email = data;
    },
    setError(text) {
      this.errorMsg = text;
    },
  },
  computed: {
    isError() {
      return this.errorMsg !== '';
    },
  },
};
</script>

<style lang="scss">

.form-window{
    box-sizing: border-box;
    width: 630px;
    padding: 10px 20px;
    background: #FFFFFF;
    box-shadow: 0px 5px 40px rgba(0, 45, 113, 0.06);
    border-radius: 10px;
    /*position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);*/
    margin: auto;

    @media (min-width: $screen-md) {
        padding: 70px 115px;
    }

    .form-window__title{
        font-family: 'Exo 2';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 34px;
        letter-spacing: 0.4px;
        color: $color-main;
        margin-bottom: 30px;
    }

    .pass--recovery{
        display: flex;
        justify-content: flex-end;
        font-size: $font-size--xsm;
        margin-top: -15px;
        color: $text-color;
        text-decoration: none;

        &:hover{
            text-decoration: underline;
        }
    }
}

.input-wrap__label{
    display: flex;
    justify-content: flex-start;
}
.checkbox-wrap{
    padding-bottom: 15px;

    p,
    a{
        font-weight: 300;
    }
}

input,
select,
.form-control{
    width: 100%;
    padding: 13px 11px;
    margin-bottom: 25px;
    box-sizing: border-box;
    font-size: $font-size--xsm;
    background: $background-input-color;
    border: 2px solid #F2F2F2;
    border-radius: 2px;

    /*&:last-of-type{
        margin-bottom: 0;
    }*/

    &:placeholder-shown{
        color: $color-gray;
        font-family: $main-font;
        font-size: $font-size--xsm;
        opacity: .57;
    }

    &:active,
    &:focus{
        outline: none;
        border-left: 2px solid $color-blue;
        background: $color-white;
    }

    &.checkbox{
        position: absolute;
        z-index: -1;
        opacity: 0;
        width: auto;

        &+label{
            display: flex;
            align-items: center;

            p{
                padding-right: 10px;
            }
        }

        &+label::before{
            content: '';
            display: inline-block;
            width: 24px;
            height: 26px;
            flex-shrink: 0;
            flex-grow: 0;
            background: #FFFFFF;
            border: 2px solid #F2F2F2;
            border-radius: 2px;
            margin-right: 0.5em;
        }

        &:checked+label::before {
            background: rgba(245, 247, 250, 0.5);
            border: 2px solid #F2F2F2;
            border-radius: 2px;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url('<%= BASE_URL %>images/check.svg');
          }
    }

    .checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;

        &::before{
            content: '';
            display: inline-block;
            width: 1em;
            height: 1em;
            flex-shrink: 0;
            flex-grow: 0;
            border: 1px solid #adb5bd;
            border-radius: 0.25em;
            margin-right: 0.5em;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 50% 50%;
        }
      }
}

.button{
    width: 100%;
}

.button__wrap{
    display: flex;
    justify-content: flex-end;
}

button.submit{
    background-color: $color-green;
    color: $color-white;
    padding: 10px 50px;
    font-family: $title-font;
    font-size: $font-size;
    border-radius: $border-radius;
    outline: none;
    border: none;
    margin-top: 20px;
}

.indicator{
    height: 10px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    display: none;
    margin-top: -20px;
    margin-bottom: 20px;
}

.indicator span{
    position: relative;
    height: 100%;
    width: 100%;
    background: lightgrey;
    border-radius: 5px;
}

.indicator span:nth-child(2){
    margin: 0 3px;
}

.indicator span.active:before{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 5px;
}

.indicator span.weak:before{
    background-color: #ff4757;
}

.errorBlock {
    color: #ff4757;
    font-size: $font-size--xsm;
}

.indicator span.medium:before,
.indicator span.orange:before{
    background-color: orange;
}

.indicator span.strong:before,
.indicator span.green:before{
    background-color: #23ad5c;
}
.form-group__message, .error {
  font-size: 0.75rem;
  line-height: 1;
  display: none;
  margin-left: 14px;
  margin-top: -1.6875rem;
  margin-bottom: 0.9375rem; }

.form-group--alert,
.form-group--error {
  animation-name: shakeError;
  animation-fill-mode: forwards;
  animation-duration: .6s;
  animation-timing-function: ease-in-out; }

.form-group--loading .form__input {
  border-image-slice: 1;
  animation: loading-frame 1s infinite; }

@keyframes loading-frame {
  0% {
    border-color: #3acfd5; }
  50% {
    border-color: #3a4ed5; }
  100% {
    border-color: #3acfd5; } }

.form-group--success .form__label, .form-group--success .form__label--inline {
  color: #43AC6A; }

.form-group--success .form-group__addon {
  color: white;
  border-color: #85d0a1;
  background: #85d0a1; }

.form-group--success input,
.form-group--success textarea,
.form-group--success input:focus,
.form-group--success input:hover {
  border-color: #85d0a1; }

.form-group--success + .form-group__message, .form-group--success + .error {
  display: block;
  color: #73c893; }

.form-group--error .form__label, .form-group--error .form__label--inline {
  color: #f04124; }

.form-group--error .form-group__addon {
  color: white;
  border-color: #f79483;
  background: #f79483; }

.form-group--error input,
.form-group--error textarea,
.form-group--error input:focus,
.form-group--error input:hover {
  border-color: #f79483; }

.form-group--error + .form-group__message, .form-group--error + .error {
  display: block;
  color: #f57f6c; }

.form-group--alert .form__label, .form-group--alert .form__label--inline {
  color: #f08a24; }

.form-group--alert .form-group__addon {
  color: white;
  border-color: #f7bd83;
  background: #f7bd83; }

.form-group--alert input,
.form-group--alert textarea,
.form-group--alert input:focus,
.form-group--alert input:hover {
  border-color: #f7bd83; }

.form-group--alert + .form-group__message {
  display: block;
  color: #f5b06c; }

@keyframes shakeError {
  0% {
    transform: translateX(0); }
  15% {
    transform: translateX(0.375rem); }
  30% {
    transform: translateX(-0.375rem); }
  45% {
    transform: translateX(0.375rem); }
  60% {
    transform: translateX(-0.375rem); }
  75% {
    transform: translateX(0.375rem); }
  90% {
    transform: translateX(-0.375rem); }
  100% {
    transform: translateX(0); } }
</style>
