<template>
<div class="result__item">
              <div class="tile-photo">
                <img :src="`${publicPath}images/person_${person.id}.png`" alt="Avatar" />
              </div>
              <div class="text-wrap">
                <div class="name">
                  <h3>{{ person.fullName }}</h3>
                  <div class="star">
                    <img :src="`${publicPath}images/star.svg`" alt="Star" />
                  </div>
                </div>
                <div class="location">
                  <img
                    :src="`${publicPath}images/location-icon.svg`"
                    alt="Location"
                  />
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
                <router-link to="/profile" class="more-person-info__link">
                  More
                </router-link>
              </div>
            </div>
</template>

<script>
export default {
  name: 'resultCard',
  props: {
    person: Object,
    index: String,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-results__tiles {
  margin: 15px 0;
  display: none;
  flex-direction: column;
  justify-content: center;

  @media (min-width: $screen-md) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .result__item {
    display: flex;
    flex-direction: row;
    background: #ffffff;
    border: 1px solid rgba(237, 237, 237, 0.2);
    box-sizing: border-box;
    box-shadow: -2px 9px 30px rgba(23, 31, 76, 0.02);
    border-radius: 2px;
    transition: all 0.5s;
    margin-right: 18px;
    margin-bottom: 18px;
    width: 330px;

    &:hover {
      box-shadow: none;
      transition: all 0.5s;
    }

    .tile-photo {
      width: 76px;
      padding: 15px;

      img {
        width: 100%;
      }
    }

    .text-wrap {
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

      .name {
        font-size: $font-size;
        display: flex;
        align-items: center;

        h3 {
          font-family: $main-font;
          font-weight: 400;
          font-size: $font-size;
        }
        .star {
          margin: 0 2px;
        }
      }

      .location {
        display: flex;
        align-items: center;
        margin: 2px 0;

        svg, img {
          margin-right: 5px;
        }
      }
      .stack,
      .rate {
        display: flex;
        align-items: center;
        margin: 2px 0;

        span {
          font-weight: 400;
          margin-right: 5px;
        }
        p {
          font-weight: 300;
        }
      }
    }
    .more-person-info__link{
      color: #2A74DB;
      font-size: 12px;
      text-decoration: none;
      font-weight: 400;
    }
  }
}
</style>
