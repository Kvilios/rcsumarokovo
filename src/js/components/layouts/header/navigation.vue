<template>
  <div class="navigation">
    <menu class="navigation-list">
      <li class="navigation-list-item animate" :class="{'active': active(listItem.link)}" v-for="listItem in list">
        <router-link :to="listItem.link">
          {{ listItem.name }}
        </router-link>
      </li>
    </menu>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .navigation {
    width: 100%;

    @include adopt(920px) {
      display: none;
    }

    &-list {
      align-items: center;
      display: flex;
      justify-content: space-between;


      &-item {
        color: $accentColor;
        font-size: em(20);
        padding: 0 $padding;

        &:last-of-type {
          padding-right: 0;
        }

        &:hover {
          color: lighten($accentColor, 10%);
        }

        &.active {
          color: $dark-text;
          font-weight: bold;
          text-decoration: underline;
        }
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        list: [
          {
            link: '/about',
            name: 'О Фонде'
          },
          {
            link: '/news',
            name: 'Новости'
          },
          {
            link: '/program',
            name: 'Программа'
          },
          {
            link: '/conditions',
            name: 'Условия'
          },
          {
            link: '/contacts',
            name: 'Контакты'
          }
        ]
      }
    },
    methods: {
      active(link) {
        return link.slice(1) === this.$route.name;
      }
    }
  }
</script>
