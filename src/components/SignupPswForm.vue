/* eslint-disable no-plusplus */
<template>
<main class="main">
        <section class="form-window">
            <h1 class="form-window__title">Complete your account</h1>
            <form action="/add" method="post">
                <input @keyup="trigger"
                type="password"
                name="password"
                id="password"
                v-model="password"
                placeholder="Create a password" required/>
                <div class="indicator">
                    <span class="weak"></span>
                    <span class="medium"></span>
                    <span class="strong"></span>
                </div>
                <input @keyup="confirm"
                type="password"
                name="password"
                id="confirm-password"
                placeholder="Confirm password" required/>
                <p id="errorBlock"></p>
                <div class="input-wrap__label checkbox-wrap">
                    <input
                    type="checkbox"
                    class="checkbox"
                    name="terms-of-service"
                    id="terms-of-service"
                    v-model="termsOfService"
                    value="yes">
                    <label for="terms-of-service">
                        <p>I agree to the myFixer.com </p>
                        <a href="#"> Terms of Service</a>
                    </label>
                </div>
                <div class="input-wrap__label checkbox-wrap">
                    <input type="checkbox"
                    class="checkbox"
                    name="privacy-policy"
                    id="privacy-policy"
                    v-model="privacyPolicy"
                    value="yes">
                    <label for="privacy-policy">
                        <p>I agree to the myFixer.com </p>
                        <a href="#"> Privacy Policy</a>
                    </label>
                </div>
                <div class="button">
                    <div class="button__wrap">
                        <button
                        @click="onSubmit"
                        class="submit"
                        >Done!</button>
                    </div>
                </div>
            </form>
        </section>
    </main>
</template>

<script>
// import cInput from '@/components/input.vue';
// import cButton from '@/components/button.vue';
import apiService from '../services/api';
import router from '../router';

export default {
  name: 'SignupPswForm',
  props: {

  },
  components: {
    // cInput,
    // cButton,
  },
  data() {
    return {
      type: 'password',
      password: '',
      termsOfService: true,
      privacyPolicy: true,
    };
  },
  methods: {
    trigger() {
      const indicator = document.querySelector('.indicator');
      const formInput = document.querySelector('#password');
      const weak = document.querySelector('.weak');
      const medium = document.querySelector('.medium');
      const strong = document.querySelector('.strong');

      if (formInput.value !== '') {
        indicator.style.display = 'block';
        indicator.style.display = 'flex';
        let protect = 0;

        if (formInput.value.length < 8) {
          weak.classList.add('active');
        }

        const small = '([a-z]+)';
        if (formInput.value.match(small)) {
          // eslint-disable-next-line no-plusplus
          protect++;
        }

        const big = '([A-Z]+)';
        if (formInput.value.match(big)) {
          // eslint-disable-next-line no-plusplus
          protect++;
        }

        const numb = '([0-9]+)';
        if (formInput.value.match(numb)) {
          // eslint-disable-next-line no-plusplus
          protect++;
        }

        const vv = /\W/;
        if (formInput.value.match(vv)) {
          // eslint-disable-next-line no-plusplus
          protect++;
        }

        if (protect === 2) {
          weak.classList.add('active');
        } else {
          medium.classList.remove('active');
        }
        if (protect === 3) {
          weak.classList.add('active', 'orange');
          medium.classList.add('active', 'orange');
        } else {
          medium.classList.remove('active', 'orange');
          weak.classList.remove('orange');
        }
        if (protect === 4) {
          weak.classList.add('active', 'green');
          medium.classList.add('active', 'green');
          strong.classList.add('active', 'green');
        } else {
          strong.classList.remove('active', 'green');
          weak.classList.remove('green');
          medium.classList.remove('green');
        }
      } else {
        indicator.style.display = 'none';
      }
    },

    confirm() {
      const pass = document.querySelector('#password');
      const confirmPass = document.querySelector('#confirm-password');
      const errorBlock = document.querySelector('#errorBlock');
      const button = document.querySelector('.submit');

      if (pass.value !== confirmPass.value) {
        errorBlock.innerHTML = 'Password mismatch';
        button.disabled = true;
      } else {
        errorBlock.innerHTML = '';
        button.disabled = false;
      }
    },
    async onSubmit(e) {
      e.preventDefault();
      await apiService.post('/complete', this.data)
        .then((res) => {
          console.log(res.data);
          this.$router.push('/succses');
        })
        .catch((err) => {
          alert(err.response.data);
        });
      const user = {
        password: this.password,
      };
      window.localStorage.setItem('user', JSON.stringify(user));
      console.log(window.localStorage.getItem('user'));
      router.push('/succses');
    },
    getPass(data) {
      this.password = data;
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
            background-image: url('/images/check.svg');
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

button.submit:disabled,
button.submit[disabled]{
    background-color: #adb5bd;
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
    margin-bottom: 25px;
}

.indicator span.medium:before,
.indicator span.orange:before{
    background-color: orange;
}

.indicator span.strong:before,
.indicator span.green:before{
    background-color: #23ad5c;
}
</style>
