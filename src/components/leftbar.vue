<template>
    <div>
    <aside class="left-bar">
    <div class="logo">
        <img :src="`${publicPath}images/logo.svg`" alt="Logo">
    </div>

    <div class="nav-bar">
        <router-link to="/search">
            <div class="nav-bar__item search" v-bind:class="{active: searchActive}">
                <img :src="`${publicPath}images/search-icon.svg`" alt="Search">
            </div>
        </router-link>
        <router-link to="/profile">
            <div class="nav-bar__item profile" v-bind:class="{active: profileActive}">
                <img :src="`${publicPath}images/profile-icon.svg`" alt="Profile">
            </div>
        </router-link>
        <router-link to="/search">
            <div class="nav-bar__item messages" v-bind:class="{active: messagesActive}">
                <img :src="`${publicPath}images/messages-icon.svg`" alt="Messages">
            </div>
        </router-link>
        <router-link to="/search">
            <div class="nav-bar__item calendar" v-bind:class="{active: calendarActive}">
                <img :src="`${publicPath}images/calendar-icon.svg`" alt="Calendar">
            </div>
        </router-link>
    </div>
</aside>

    <header class="profile-header">
        <div class="top-bar">
            <crumbs/>
            <a class="profile-name">Faruh Bernandez</a>
        </div>
    </header>
    </div>
</template>

<script>
import crumbs from '@/components/breadcrumbs.vue';

export default {
  name: 'Leftbar',
  components: {
    crumbs,
  },
  props: {
    searchActive: Boolean,
    profileActive: Boolean,
    messagesActive: Boolean,
    calendarActive: Boolean,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style scoped lang="scss">
.left-bar{
    width: 80px;
    height: 100%;
    background-color: $color-dark-blue;
    position: fixed;
    left: 0;
    display: flex;
    flex-direction: column;

    .logo{
        width: 100%;
        padding: 18px 0;
        flex-grow: 1;

        svg, img{
            display: block;
            margin: auto;
        }
    }

    .nav-bar{
        display: flex;
        flex-direction: column;
        flex-grow: 2;

        .nav-bar__item{
            height: 50px;
            display: flex;
            padding: 15px 0;
            position: relative;
            opacity: .5;
            transition: all 0.5s ease-in;

            &:hover,
            &:focus{
                opacity: 1;

                &::before{
                    content: '';
                    width: 4px;
                    position: absolute;
                    background-color: #0AD69C;
                    height: 100%;
                    left: 0;
                    top: 0;
                    transition: all 0.5s ease-in;
                }
            }

            &.active{
                opacity: 1;

                &::before{
                    content: '';
                    width: 4px;
                    position: absolute;
                    background-color: #0AD69C;
                    height: 100%;
                    left: 0;
                    top: 0;
                    transition: all 0.5s ease-in;
                }
            }
        }

        svg, img{
            margin: auto;
            display: block;
            width: 18px;
            height: 18px;
        }
    }
}

.top-bar{
    height: 60px;
    background: $color-white;
    padding: 0 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #DAE4F2;
}

.profile-name{
    display: flex;
    align-items: center;
    cursor: pointer;
    color: $text-color;
    font-weight: 400;

    &::after{
        background-image:url('data:image/svg+xml,<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2222 1.13514L9.13328 4.85176e-08L5.5555 3.72973L1.97772 4.85176e-08L0.888834 1.13514L5.5555 6L10.2222 1.13514Z" fill="%23252F48"/></svg>');
            width: 11px;
            content: '';
            height: 6px;
            display: block;
            margin-left: 20px;
    }
}
</style>
