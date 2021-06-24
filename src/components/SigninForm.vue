<template>
    <main class="main">
        <section class="form-window">
            <h1 class="form-window__title">Sign in</h1>
            <form action="post">
                <cInput
                type="email"
                name="email"
                id="email"
                @focus="clearError"
                v-model="email"
                v-on:change-my-input="getEmail"
                placeholder="Your email" />
                <p v-if="isError" id="errorBlock">{{errorMsg}}</p>
                <cInput
                type="password"
                name="password"
                id="password"
                @focus="clearError"
                v-model="password"
                v-on:change-my-input="getPassword"
                placeholder="Your password"/>
                <a class="pass-recovery" href="./pass-recovery.html">Forgot password?</a>
                <div class="button">
                    <div class="button__wrap">
                        <button @click.prevent="login"
                        class="submit" type="submit">Sign in</button>
                    </div>
                </div>
            </form>
        </section>
    </main>
</template>

<script>
import cInput from '@/components/input.vue';
import apiService from '../services/api';
// eslint-disable-next-line no-unused-vars
import store from '../store/index';
import { AUTH_REQUEST } from '../store/actions/auth';

export default {
  name: 'signin',
  props: {
  },
  components: {
    cInput,
  },
  data() {
    return {
      email: '',
      password: '',
      errorMsg: '',
    };
  },
  methods: {
    async login1() {
      // const user = this.$store.getters.accountInfo;
      await apiService.post('/auth', {
        email: this.email,
        password: this.password,
      })
        .then(
          (response) => {
            const { accessToken, refreshToken } = response.data.tokens;
            this.$store
              .dispatch('login', {
                account: response.data,
                tokens: {
                  access: accessToken,
                  refresh: refreshToken,
                },
              })
              .then(() => this.$router.replace(this.$route.query.redirect || '/profile'));
            console.log(response.data.tokens.accessToken);
            console.log(response.data.email);
          },
        )
        .catch((error) => this.setError(error));
    },
    getEmail(data) {
      this.email = data;
    },
    getPassword(data) {
      this.password = data;
    },
    setError(error) {
      this.errorMsg = error.response.data.error.message;
    },
    clearError() {
      this.errorCode = '';
    },
    login() {
      const { email, password } = this;
      // eslint-disable-next-line no-undef
      this.$store.dispatch(AUTH_REQUEST, { email, password }).then(() => {
        this.$router.push('/profile');
      })
        .catch((error) => this.setError(error));
    },
  },
  computed: {
    isError() {
      return this.errorMsg !== '';
    },
  },
};
</script>

<style scoped lang="scss">

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

.input-wrap__row{
    display: flex;
    justify-content: space-between;

    input{
        width: 48%;
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

#errorBlock {
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
#errorBlock{
    color: #ff4757;
    font-size: 0.75rem;
    margin-bottom: 25px;
}
</style>
