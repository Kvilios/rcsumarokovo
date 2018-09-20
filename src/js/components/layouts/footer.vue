<template>
  <div id="footer" class="footer">
    <div class="layout">
      <div class="footer-top" v-if="isScrolled">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 25.5" v-scroll-to="'#header'">
        	<polyline class="icon animate" points="1 16.5 27 1 53 16.5" />
        	<polyline class="icon animate" points="1 24.5 27 9 53 24.5" />
        </svg>
      </div>
      <div class="footer-copyright">
        <div class="footer-copyright-about">
          <p>
            БФ прп. Геннадия Костромского и Любимоградского
          </p>
          <p>
            &copy; Все права защищены, 2015-2018
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .footer {
    border-top: 3px dashed $light;
    margin-top: 50px;

    &-top {
      display: flex;
      justify-content: center;
      padding: 16px 0;

      svg {
        cursor: pointer;
        height: 26px;
        width: 54px;

        &:hover {
          .icon {
            stroke: lighten($accentColor, 10%);
          }
        }

        .icon {
          fill: none;
          stroke: $accentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 2px;
        }
      }
    }

    &-copyright {
      color: $accentColor;
      display: flex;
      justify-content: center;
      padding: 50px 0;

      &-about {
        align-items: center;
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 50%;

        p {
          margin-bottom: 25px;

          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
    }
  }
</style>

<script>
  export default {
    created() {
      this.isScrolled = Boolean(window.pageYOffset);
      window.onscroll = () => {
        this.isScrolled = Boolean(window.pageYOffset);
      }
    },
    data() {
      return {
        isScrolled: false
      }
    }
  }
</script>
