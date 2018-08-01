<template>
  <div id="header" class="header">
    <div class="layout">
      <div class="header-wrapper">
        <div class="header-logotype">
          <img v-if="isHome" src="/img/layouts/header/logotype.png" alt="">
          <router-link v-else to="/">
            <img src="/img/layouts/header/logotype.png" alt="">
          </router-link>
        </div>
        <div class="header-wrapper-wrapper">
          <v-socials />
          <v-navigation />
          <div class="adopt920">
            <p class="header-wrapper-wrapper-callme" @click="showCallback">
              <img src="/img/pages/home/banner/icon.png" alt="">
              <span>
                Обратный звонок
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .header {
    box-shadow: 0 4px 8px 0 rgba(black, .25);
    position: relative;
    z-index: 2;

    &-wrapper {
      display: flex;
      justify-content: space-between;
      max-height: 100px;
      padding: $padding 0;

      &-wrapper {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: space-between;

        @include adopt(920px) {
          justify-content: center;
        }

        &-callme {
          cursor: pointer;
          display: flex;
          justify-content: center;
          width: 100%;

          &:hover {
            span {
              text-decoration: underline;
            }
          }

          img {
            margin-right: 10px;
          }

          span {
            font-family: Garamond, serif;
            font-weight: bold;
          }
        }
      }
    }

    &-logotype {
      display: flex;
      justify-content: center;
      margin-bottom: -85px;
      width: 262px;

      img {
        background-color: white;
        border: 10px solid white;
        box-shadow: 0 4px 8px 0 rgba(black, .25);
        height: 170px;
        border-radius: 50%;
        width: 170px;
      }
    }
  }
</style>

<script>
  import vSocials from '@/js/components/layouts/header/socials.vue';
  import vNavigation from '@/js/components/layouts/header/navigation.vue';

  export default {
    components: {
      vSocials,
      vNavigation
    },
    computed: {
      isHome() {
        return this.$route.name === 'home';
      }
    },
    methods: {
        showCallback() {
            this.$modal.show('banner-callback');
        }
    }
  }
</script>
