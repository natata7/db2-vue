<template>
  <div class="home">
    <Leftbar v-bind:searchActive='true'/>
    <main class="main main-left">
        <section class="search-window">
            <aside class="search-form">
                <form action="">
                    <div class="input__row location">
                        <label for="location">Location</label>
                        <Input v-model="location" type="location"
                        name="location" placeholder=""
                        :location="true"></Input>

                    </div>
                    <div class="input__row">
                        <label for="search">Search</label>
                        <Input v-model="search" type="search"
                        name="search" placeholder="Type your query..."
                        ></Input>
                    </div>
                    <div class="input__row">
                        <label for="category">Category</label>
                        <Select v-model="category"/>
                        <select name="category" id="category">
                            <option value="Category 1">Category 1</option>
                            <option value="Category 2">Category 2</option>
                            <option value="Category 3">Category 3</option>
                        </select>
                    </div>
                    <div class="input__row">
                        <label for="service">Service</label>
                        <select name="service" id="service">
                            <option value="3 services">3 services</option>
                        </select>
                    </div>
                    <div class="input__row">
                        <label for="period">Period</label>
                        <input name="period" id="period">
                    </div>
                    <button class="search" type="submit">Search</button>
                </form>
            </aside>
            <section class='search-results'>
                <div class="search-results__control-elements">
                    <a href="" class="search-result__togler">Show map:</a>
                    <div class="sort active">
                        <div class="sort-ads">
                            <img :src="`${publicPath}images/sort-icon.svg`"
                            alt="Sort">
                        </div>
                            <input type="radio" id="byPrise" name="sort" value="byPrise" checked>
                            <label class="radio" for="byPrise">by prise</label>

                            <input type="radio" id="byRating" name="sort" value="byRating">
                            <label class="radio" for="byRating">by rating</label>
                    </div>
                </div>
                <div class="search-results__tiles active">
                    <div class="result__item">
                        <div class="tile-photo">
                            <img :src="`${publicPath}images/person_1.png`" alt="Avatar">
                        </div>
                        <div class="text-wrap">
                            <div class="name">
                                <h3>Richard Thompson</h3>
                                <div class="star">
                                    <img :src="`${publicPath}images/star.svg`" alt="Star">

                                </div>
                            </div>
                            <div class="location">
                                <img :src="`${publicPath}images/location-icon.svg`" alt="Location">
                                <p>Vancouver, Canada</p>
                            </div>
                            <div class="stack">
                                <span>Stack: </span>
                                <p>Python, Django, Sketch</p>
                            </div>
                            <div class="rate">
                                <span>Base daily rate: </span>
                                <p>$ 1,200 USD</p>
                            </div>
                        </div>
                    </div>
                    <div class="result__item">
                        <div class="tile-photo">
                            <img :src="`${publicPath}images/person_2.png`" alt="Avatar">
                        </div>
                        <div class="text-wrap">
                            <div class="name">
                                <h3>Richard Thompson</h3>
                                <div class="star">
                                    <img :src="`${publicPath}images/star.svg`" alt="Star">
                                </div>
                            </div>
                            <div class="location">
                                <img :src="`${publicPath}images/location-icon.svg`" alt="Location">
                                <p>Vancouver, Canada</p>
                            </div>
                            <div class="stack">
                                <span>Stack: </span>
                                <p>Python, Django, Sketch</p>
                            </div>
                            <div class="rate">
                                <span>Base daily rate: </span>
                                <p>$ 1,200 USD</p>
                            </div>
                        </div>
                    </div>
                    <div class="result__item">
                        <div class="tile-photo">
                            <img :src="`${publicPath}images/person_3.png`" alt="Avatar">
                        </div>
                        <div class="text-wrap">
                            <div class="name">
                                <h3>Richard Thompson</h3>
                                <div class="star">
                                    <img :src="`${publicPath}images/star.svg`" alt="Star">
                                </div>
                            </div>
                            <div class="location">
                                <img :src="`${publicPath}images/location-icon.svg`" alt="Location">
                                <p>Vancouver, Canada</p>
                            </div>
                            <div class="stack">
                                <span>Stack: </span>
                                <p>Python, Django, Sketch</p>
                            </div>
                            <div class="rate">
                                <span>Base daily rate: </span>
                                <p>$ 1,200 USD</p>
                            </div>
                        </div>
                    </div>
                    <div class="result__item">
                        <div class="tile-photo">
                            <img :src="`${publicPath}images/person_4.png`" alt="Avatar">
                        </div>
                        <div class="text-wrap">
                            <div class="name">
                                <h3>Richard Thompson</h3>
                                <div class="star">
                                    <img :src="`${publicPath}images/star.svg`" alt="Star">
                                </div>
                            </div>
                            <div class="location">
                                <img :src="`${publicPath}images/location-icon.svg`" alt="Location">
                                <p>Vancouver, Canada</p>
                            </div>
                            <div class="stack">
                                <span>Stack: </span>
                                <p>Python, Django, Sketch</p>
                            </div>
                            <div class="rate">
                                <span>Base daily rate: </span>
                                <p>$ 1,200 USD</p>
                            </div>
                        </div>
                    </div>
                    <div class="result__item">
                        <div class="tile-photo">
                            <img :src="`${publicPath}images/person_5.png`" alt="Avatar">
                        </div>
                        <div class="text-wrap">
                            <div class="name">
                                <h3>Richard Thompson</h3>
                                <div class="star">
                                    <img :src="`${publicPath}images/star.svg`" alt="Star">
                                </div>
                            </div>
                            <div class="location">
                                <img :src="`${publicPath}images/location-icon.svg`" alt="Location">
                                <p>Vancouver, Canada</p>
                            </div>
                            <div class="stack">
                                <span>Stack: </span>
                                <p>Python, Django, Sketch</p>
                            </div>
                            <div class="rate">
                                <span>Base daily rate: </span>
                                <p>$ 1,200 USD</p>
                            </div>
                        </div>
                    </div>
                    <div class="result__item">
                        <div class="tile-photo">
                            <img :src="`${publicPath}images/person_5.png`" alt="Avatar">
                        </div>
                        <div class="text-wrap">
                            <div class="name">
                                <h3>Richard Thompson</h3>
                                <div class="star">
                                    <img :src="`${publicPath}images/star.svg`" alt="Star">
                                </div>
                            </div>
                            <div class="location">
                                <img :src="`${publicPath}images/location-icon.svg`" alt="Location">
                                <p>Vancouver, Canada</p>
                            </div>
                            <div class="stack">
                                <span>Stack: </span>
                                <p>Python, Django, Sketch</p>
                            </div>
                            <div class="rate">
                                <span>Base daily rate: </span>
                                <p>$ 1,200 USD</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="search-results__map">
                    <div id="mapid" class="map">
                    </div>
                </div>
            </section>
        </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Input from '@/components/input.vue';
import Select from '@/components/select.vue';
import Leftbar from '@/components/leftbar.vue';
import $ from 'jquery';

export default {
  name: 'Search',
  metaInfo: {
    title: 'Search',
    titleTemplate: '%s | DB2 app',
  },
  props: {
    title: String,
    searchActive: Boolean,
  },
  components: {
    Leftbar,
    Input,
    Select,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      location: 'location',
      selected: 'А',
      options: [
        { text: 'Один', value: 'А' },
        { text: 'Два', value: 'Б' },
        { text: 'Три', value: 'В' },
      ],
    };
  },
  mounted() {
    const externalScript = document.createElement('script');
    externalScript.setAttribute('src', 'https://cdn.jsdelivr.net/jquery/latest/jquery.min.js');
    const momentjs = document.createElement('script');
    momentjs.setAttribute('src', 'https://cdn.jsdelivr.net/momentjs/latest/moment.min.js');
    const daterangepicker = document.createElement('script');
    daterangepicker.setAttribute('src', 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js');
    const daterangepickercss = document.createElement('link');
    daterangepickercss.setAttribute('src', 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css');
    document.head.appendChild(externalScript, momentjs, daterangepicker, daterangepickercss);
    $('input[name="period"]').daterangepicker();
  },
};
</script>

<style lang="scss" scoped>
.search-window{
    background: $color-white;
    padding: 20px;
    margin: auto;
    min-width: 80%;
    min-height: 300px;

    @media (min-width: $screen-md) {
        padding: 45px;
        display: flex;
    }
}

.search-form{
    width: 33%;
    border-right: 1px solid $color-gray-border;
    padding-right: 45px;

    label{
        text-transform: uppercase;
        font-weight: 500;
        font-size: $font-size--xsm;
        margin-bottom: 5px;
        display: block;
        letter-spacing: 1px;
        color: $label-color;
    }

    .input__row,
    button{
        width: 100%;
        position: relative;
    }
    button{
        background-color: $color-green;
        color: $color-white;
        padding: 10px 50px;
        font-family: $title-font;
        font-size: $font-size--sm;
        border-radius: $border-radius;
        outline: none;
        border: none;
        text-transform: uppercase;
    }
}

.search-results{
    width: 66%;
    display: flex;
    flex-direction: column;
    margin-left: 45px;

    &__control-elements{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    a.search-result__togler{
        text-transform: uppercase;
        font-weight: 300;
        color: $text-color;
    }

    .show-map{
        font-size: $font-size--xsm;
        color: $color-dark-blue;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 500;
    }

}
.input-wrap{
        margin-bottom: 20px;
    }

.sort{
    display: none;
    min-width: 50%;

    .sort-ads{
        /* margin: 0px 20px; */
    }

    label{
        white-space: nowrap;
    }
    input[type="radio"]{
        display: none;
    }

    label{
        display: inline-block;
        cursor: pointer;
        position: relative;
        padding-left: 65px;
        font-weight: 300;
        font-size: $font-size--sm;
        font-family: $main-font;
    }

    label.radio::before{
        content: '';
        display: inline-block;
        position: absolute;
        left: 35px;
        width: 18px;
        height: 18px;
        border-radius: 18px;
        background: #FFFFFF;
        border: 1px solid #F0F1F3;
        box-shadow: 0px 1px 7px rgba(204, 202, 212, 0.58);
    }
    input[type=radio]:checked + label.radio:before {
        background: url('data:image/svg+xml,<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.0006" cy="4.0006" r="3.46154" fill="%230AD69C"/></svg>');
        background-position: center;
        background-repeat: no-repeat;
        background-color: #ffffff;
    }
}

.search-results__tiles{
    margin: 15px 0;
    display: none;
    flex-direction: column;
    justify-content: center;

    @media (min-width: $screen-md) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .result__item{
        display: flex;
        flex-direction: row;
        background: #FFFFFF;
        border: 1px solid rgba(237, 237, 237, 0.2);
        box-sizing: border-box;
        box-shadow: -2px 9px 30px rgba(23, 31, 76, 0.02);
        border-radius: 2px;
        transition: all .5s;
        margin-right: 18px;
        margin-bottom: 18px;
        width: 330px;

        &:hover{
            box-shadow: none;
            transition: all .5s;
        }

        .tile-photo{
            width: 76px;
            padding: 15px;

            img{
                width: 100%;
            }
        }

        .text-wrap{
            padding: 0 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            p,
            span {
                color: $color-black;
                font-family: $main-font;
                font-size: $font-size--xsm;
            }

            .name{
                font-size: $font-size;
                display: flex;
                align-items: center;

                h3{
                    font-family: $main-font;
                    font-weight: 400;
                    font-size: $font-size;
                }
                .star{
                    margin: 0 2px;
                }
            }

            .location{
                display: flex;
                align-items: center;
                margin: 2px 0;

                svg{
                    margin-right: 5px;
                }
            }
            .stack,
            .rate{
                display: flex;
                align-items: center;
                margin: 2px 0;

                span{
                    font-weight: 400;
                    margin-right: 5px;
                }
                p{
                    font-weight: 300;
                }
            }
        }
    }
}

.search-results__map{
    display: none;

    .map{
        width: 100%;
        height: 59vh;
    }
}

#mapid{
    height: 454px;
}

.active{
    display: flex;
    transition: all 1s ease-in;
}
</style>
