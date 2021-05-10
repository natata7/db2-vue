/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
<template>
  <div class="home">
    <Leftbar v-bind:searchActive="true" />
    <main class="main main-left">
      <section class="search-window">
        <aside class="search-form">
          <form action="">
            <div class="input__row location">
              <label for="location">Location</label>
              <cInput
                v-model="location"
                type="location"
                name="location"
                placeholder=""
                :location="true"
              ></cInput>
            </div>
            <div class="input__row">
              <label for="search">Search</label>
              <cInput
                v-model="search"
                type="search"
                name="search"
                placeholder="Type your query..."
              ></cInput>
            </div>
            <div class="input__row">
              <label for="category">Category</label>
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
              <date-range-picker
                ref="picker"
                :locale-data="{ firstDay: 1, format: 'DD-MM-YYYY HH:mm:ss' }"
                :min-date="dateRangePicker.minDate"
                :ranges="dateRangePicker.show_ranges"
                :opens="dateRangePicker.opens"
                :autoApply="dateRangePicker.autoApply"
                :dateFormat="dateFormat"
                :date-range="dateRangePicker.dateRange"
                v-model="dateRangePicker.dateRange"
              >
                <template v-slot:input="picker">
                  <div class="input date">
                    {{ picker.startDate | date }} - {{ picker.endDate | date }}
                  </div>
                </template>
              </date-range-picker>
            </div>
            <button class="search" type="submit">Search</button>
          </form>
        </aside>
        <section class="search-results">
          <div class="search-results__control-elements">
            <span class="search-result__togler"
            @click="showResult = !showResult"
            >Show {{ showResult ? "map" : "results" }}:</span>
            <div class="sort active" v-show="showResult">
              <div class="sort-ads">
                <img :src="`${publicPath}images/sort-icon.svg`" alt="Sort" />
              </div>
              <input type="radio" id="byPrise"
                            name="sort" value="byPrise" checked>
              <label class="radio" for="byPrise">by prise</label>

              <input type="radio" id="byRating" name="sort" value="byRating">
              <label class="radio" for="byRating">by rating</label>
            </div>
          </div>
          <div class="search-results__tiles active" v-show="showResult">
            <result-card v-for="person in people"
            :key="person.id"
            :person="person">
            </result-card>
          </div>
          <div class="search-results__map" v-show="!showResult">
            <div id="mapid" class="map"></div>
          </div>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import cInput from '@/components/input.vue';
import resultCard from '@/components/resultCard.vue';
import Leftbar from '@/components/leftbar.vue';
import moment from 'moment';
import DateRangePicker from 'vue2-daterange-picker';

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
    cInput,
    resultCard,
    DateRangePicker,
  },
  filters: {
    date(value) {
      return moment(value).format('DD/MM/YYYY');
    },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      location: 'location',
      search: '',
      category: '',
      dateRangePicker: {
        opens: 'right',
        minDate: '',
        dateRange: {
          startDate: '2020-12-10',
          endDate: '2022-12-10',
        },
        show_ranges: false,
        autoApply: true,
      },
      results: ['results', 'map'],
      showResult: true,
      people: [
        {
          id: 1,
          fullName: 'Richard Thompson',
        },
        {
          id: 2,
          fullName: 'Martha Stewart',
        },
        {
          id: 3,
          fullName: 'Christina Ricci',
        },
        {
          id: 4,
          fullName: 'Angela Heerdegen',
        },
        {
          id: 5,
          fullName: 'James Pullman',
        },
      ],
    };
  },
  mounted() {
    const externalCss = document.createElement('link');
    externalCss.setAttribute(
      'src',
      'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css',
    );
    externalCss.setAttribute(
      'integrity',
      'sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==',
    );
    externalCss.setAttribute(
      'crossorigin',
      '',
    );
    const externalScript = document.createElement('script');
    externalScript.setAttribute(
      'src',
      'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js',
    );
    externalScript.setAttribute(
      'integrity',
      'sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==',
    );
    externalScript.setAttribute(
      'crossorigin',
      '',
    );
    const momentjs = document.createElement('script');
    momentjs.setAttribute(
      'src',
      'https://cdn.jsdelivr.net/momentjs/latest/moment.min.js',
    );
    const daterangepicker = document.createElement('script');
    daterangepicker.setAttribute(
      'src',
      'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js',
    );
    const daterangepickercss = document.createElement('link');
    daterangepickercss.setAttribute(
      'src',
      'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css',
    );
    document.head.appendChild(
      externalScript,
      momentjs,
      daterangepicker,
      daterangepickercss,
    );
    // $('input[name="period"]').daterangepicker();
    // eslint-disable-next-line no-undef
    const mymap = L.map('mapid').setView([51.505, -0.09], 13);
    // eslint-disable-next-line no-undef
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibmF0czciLCJhIjoiY2ttamtkdDgwMHJzNjJ2bnoxN3RjMjZ5cCJ9.NIf79YnLXoEWKUFJ6ifirA',
    }).addTo(mymap);
    // eslint-disable-next-line no-undef
    const marker = L.marker([51.5, -0.09]).addTo(mymap);
    console.log(marker);
  },

  methods: {
    dateFormat(classes, date) {
      const today = moment();
      if (classes.today) {
        // eslint-disable-next-line no-param-reassign
        classes.disabled = !date.isSame(today, 'day');
      }
      return classes;
    },
  },
};
</script>

<style lang="scss">
@import '../../node_modules/vue2-daterange-picker/dist/vue2-daterange-picker.css';
.search-window {
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

.search-form {
  width: 33%;
  border-right: 1px solid $color-gray-border;
  padding-right: 45px;

  label {
    text-transform: uppercase;
    font-weight: 500;
    font-size: $font-size--xsm;
    margin-bottom: 5px;
    display: block;
    letter-spacing: 1px;
    color: $label-color;
  }

  .input__row,
  button {
    width: 100%;
    position: relative;
  }
  button {
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

.search-results {
  width: 66%;
  display: flex;
  flex-direction: column;
  margin-left: 45px;

  &__control-elements {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  span.search-result__togler {
    text-transform: uppercase;
    font-weight: 300;
    color: $text-color;
    font-family: "Roboto", Arial, sans-serif;
    font-size: 1rem;
  }

  .show-map {
    font-size: $font-size--xsm;
    color: $color-dark-blue;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
  }
}
.input-wrap {
  margin-bottom: 20px;
}

.sort {
  display: none;
  min-width: 50%;

  .sort-ads {
    /* margin: 0px 20px; */
  }

  label {
    white-space: nowrap;
  }
  input[type="radio"] {
    display: none;
  }

  label {
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 65px;
    font-weight: 300;
    font-size: $font-size--sm;
    font-family: $main-font;
  }

  label.radio::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 35px;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background: #ffffff;
    border: 1px solid #f0f1f3;
    box-shadow: 0px 1px 7px rgba(204, 202, 212, 0.58);
  }
  input[type="radio"]:checked + label.radio:before {
    background: url('data:image/svg+xml,<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.0006" cy="4.0006" r="3.46154" fill="%230AD69C"/></svg>');
    background-position: center;
    background-repeat: no-repeat;
    background-color: #ffffff;
  }
}

.search-results__map {
  .map {
    width: 100%;
    height: 59vh;
  }
}

#mapid {
  height: 454px;
}

.active {
  display: flex;
  transition: all 1s ease-in;
}
.vue-daterange-picker{
    width: 100%;
    font-family: 'Roboto';

}
.form-control.reportrange-text{
    width: 100%;
    padding: 13px 11px!important;
    margin-bottom: 25px;
    box-sizing: border-box;
    font-size: 0.75rem;
    background: #FCFCFC;
    border: 2px solid #F2F2F2!important;
    border-radius: 2px;
}
.daterangepicker{
  font-family: "Roboto", Arial, sans-serif;
}

</style>
