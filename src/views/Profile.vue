<template>
<div>
<Leftbar v-bind:profileActive='true'/>
  <main class="main">
        <section class="information-window">
            <div class="tabs-header">
                <div class="tabs-header__item" id="tabs-header__item" data-tab="1" :class="{
                active: showInformationTab === informationTab
                }"
                v-for="(informationTab, i) in informationTabs"
                :key="i"
                @click="showInformationTab = informationTab">
                    <h2 class="information-window__title">{{ informationTab }} INFORMATION</h2>
                </div>
            </div>
            <div class="tabs-content" id="tabs-content">
                <div class="tabs-content__item" data-tab="1"
                v-show="showInformationTab === 'personal'">
                    <div class="personal-photo">
                        <img :src="`${publicPath}images/photo.jpg`" alt="Avatar">
                        <label for="file" class="edit-link">
                        <div class="edit-link">
                            <img :src="`${publicPath}images/edit-icon.svg`"
                            alt="Edit"
                            class="edit-link__image">
                            Change photo
                        </div>
                        <input
                            type="file"
                            id="file"
                            accept="image/*"
                            @change="true"
                            hidden
                        />
                        </label>
                    </div>
                    <form action="">
                        <div class="input-wrap__row">
                            <label for="name">First name</label>
                            <input type="name" name="name" id="name" placeholder="Faruh">
                        </div>
                        <div class="input-wrap__row">
                            <label for="lastName">Last name</label>
                            <input type="lastName"
                            name="lastName" id="lastName"
                            placeholder="Bernandez">
                        </div>
                        <div class="input-wrap__row">
                            <label for="title">Title</label>
                            <select name="title" id="title">
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Ms.">Ms.</option>
                            </select>
                        </div>
                        <div class="input-wrap__row">
                            <label for="name">MOBILE PHONE</label>
                            <input type="phone" name="phone" id="phone" placeholder="">
                            <div class="input-phone"></div>
                        </div>
                        <div class="input-wrap__row">
                            <label for="country">COUNTRY</label>
                            <input type="country" name="country" id="country">
                        </div>
                        <div class="input-wrap__row">
                            <label for="company">COMPANY</label>
                            <input type="company" name="company" id="company">
                        </div>
                    </form>
                </div>
                <div class="tabs-content__item" data-tab="2"
                v-show="showInformationTab === 'account'">
                    <form action="">
                        <div class="input-wrap__row">
                            <label for="name">Username</label>
                            <input type="name" name="name" id="name" placeholder="Faruh">
                        </div>
                        <div class="input-wrap__row">
                            <label for="email">E-mail</label>
                            <input type="email" name="email" id="email"
                            placeholder="sarahbarnes@gmail.com">
                        </div>
                        <a href="" class="change-pass">Change password</a>
                    </form>
                </div>
            </div>
        </section>
    </main>
    </div>
</template>
<script src="./js/intlTelInput.js"></script>

<script>
// @ is an alias to /src
import Leftbar from '@/components/leftbar.vue';
import apiService from '../services/api';

export default {
  name: 'Profile',
  metaInfo: {
    title: 'Profile',
    titleTemplate: '%s | DB2 app',
  },
  props: {
    title: String,
  },
  components: {
    Leftbar,
  },
  data() {
    return {
      informationTabs: ["personal", "account"],
      showInformationTab: "personal",
      publicPath: process.env.BASE_URL,
    };
  },
  mounted() {
    apiService.get('/admin')
      .then((res) => {
        this.usersResponse = res;
        console.log(res);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  },
  methods: {
    async onSubmit(id, index) {
      console.log(index);
      await apiService.get(`/admin/${id}/delete/`)
        .then((res) => {
          console.log(res);
          // this.$router.push('/admin');
        })
        .catch((err) => {
          alert(err.response.data);
        });
      this.usersResponse.data.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.information-window{
    background: $color-white;
    padding: 20px;
    margin: auto;
    min-width: 80%;
    min-height: 300px;

    @media (min-width: $screen-md) {
        padding: 60px;
    }

    .input-wrap__row{
        flex-direction: column;
        width: 100%;

        input{
            width: 100%;
        }

        @media (min-width: $screen-md) {
            width: 45%;
            padding-right: 15px;
        }
    }

    label{
        color: $label-color;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 500;
        font-family: $main-font;
    }
}

.tabs-header{
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 40px;
    flex-direction: column;

    @media (min-width: $screen-md) {
        flex-direction: row;
    }

    .tabs-header__item{
        color: $color-light-gray;
        text-align: center;

        @media (min-width: $screen-md) {
            border-bottom: 2px solid #E9E9E9;
        }

        h2{
            font-size: $font-size;
            text-transform: uppercase;
        }

        &:hover,
        &.active{
            color: $color-dark-blue;

            @media (min-width: $screen-md) {
                border-bottom: 2px solid #2A74DB;
            }
        }
    }
}

.tabs-content{
    display: flex;
    .tabs-content__item{
        display: flex;
        width: 100%;

        &.active{
            display: flex;
            flex-direction: column;

                @media (min-width: $screen-md) {
                    flex-direction: row;
                }
        }
    }

    form{
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        @media (min-width: $screen-md) {
            width: 80%;
            margin: auto;
        }
    }
}

.personal-photo{
    margin-right: 20px;
    width: 100%;

    @media (min-width: $screen-md) {
        width: 20%;
    }

    img{
        margin: auto;
        display: block;
    }

    .edit-link{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
        cursor: pointer;

        svg, img.edit-link__image{
            margin: 0;
            margin-right: 15px;
        }
    }
}

.iti.iti--allow-dropdown {
    margin-bottom: 25px;
    display: flex;
}

.iti--allow-dropdown>.iti__flag-container {
    position: relative;
}
.iti--allow-dropdown .iti__flag-container,
.iti--separate-dial-code .iti__flag-container {
    margin-right: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 0.75rem;
    background: #FCFCFC;
    border: 2px solid #F2F2F2;
    border-radius: 2px;
}

.iti__flag-container>.iti__selected-flag {
    z-index: 1;
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0px 15px;
}
.iti__selected-flag>.iti__arrow{
    background-image: url('data:image/svg+xml,<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2222 1.13514L9.13328 4.85176e-08L5.5555 3.72973L1.97772 4.85176e-08L0.888834 1.13514L5.5555 6L10.2222 1.13514Z" fill="%23252F48"/></svg>');
    width: 11px;
    height: 6px;
    border: none;
}
a.change-pass{
    text-transform: uppercase;
    text-align: right;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: $font-size--xsm;

    &:after{
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="6px" height="9px" viewBox="0 0 6 9" fill="none"><path d="M1.13514 -0.000183105L4.85176e-08 0.985687L3.72973 4.22498L4.85176e-08 7.46426L1.13514 8.45014L6 4.22498L1.13514 -0.000183105Z" fill="%23002396"/></svg>');
        width: 6px;
        content: '';
        height: 8px;
        display: block;
        margin-left: 10px;
    }
}
</style>
