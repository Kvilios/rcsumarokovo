<template>
  <div id="contacts" class="contacts">
    <div class="adopt920">
        <v-menu />
    </div>
    <v-phones />
    <div class="layout">
      <ul class="contacts-list">
        <li class="contacts-list-item">
          <h2 class="contacts-list-item-title">
            РЦ &laquo;Сумароково&raquo;<br>
            находится по адресу:
          </h2>
          <div class="contacts-list-item-description">
            <p>
              157084, Россия,
            </p>
            <p>
              Костромская область,
            </p>
            <p>
              Сусанинский район, село Сумароково,
            </p>
            <p>
              улица Центральная, 14
            </p>
          </div>
          <div id="map-1" class="contacts-list-item-map"></div>
        </li>
        <li class="contacts-list-item">
          <h2 class="contacts-list-item-title">
            Группа взаимопомощи проходит<br>
            каждую пятницу в 18:00<br>
            по адресу:
          </h2>
          <div class="contacts-list-item-description">
            <p>
              г. Кострома,
            </p>
            <p>
              Кадыевский переулок, 2
            </p>
          </div>
          <div id="map-2" class="contacts-list-item-map"></div>
        </li>
      </ul>
      <ul class="contacts-resource-list">
        <li class="contacts-resource-list-item">
          <div class="contacts-resource-list-item-icon" :style="'width: 35px; ' + iconStyle('icon-1.svg')"></div>
          <div class="contacts-resource-list-item-label">
            <a class="contacts-resource-list-item-label-link animate" href="callto:89159012777">+7 (915) 901 27 77</a>, <a class="contacts-resource-list-item-label-link" href="callto:89109536777">+7 (910) 953 67 77</a>
          </div>
        </li>
        <li class="contacts-resource-list-item" v-for="listItem in list">
          <div class="contacts-resource-list-item-icon" :style="iconStyle(listItem.icon)"></div>
          <div class="contacts-resource-list-item-label">
            <a class="contacts-resource-list-item-label-link animate" :href="listItem.link" target="_blank">
              {{ listItem.label }}
            </a>
          </div>
        </li>
      </ul>
      <div class="contacts-requisites">
        <h2 class="contacts-requisites-title">
          Реквизиты:
        </h2>
        <div class="contacts-requisites-inside">
          <p>Костромское отделение №8640 ПАО Сбербанк г. Кострома</p>
          <p>«БИК» Банка получателя 043469623</p>
          <p>«Сч. №» Банка получателя 30101810200000000623</p>
          <p>«Сч. №» Получателя 40703810129000000257</p>
          <p>«Получатель» БФ «Преподобного Геннадия Костромского и Любимоградского»</p>
          <p>«ИНН получателя» 4428002120</p>
          <p>Назначение платежа: Благотворительное пожертвование</p>
          <p>Исполнительный директор: Бредихин Максим Сергеевич, действующий на основании Устава</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .contacts {
    &-list {
      display: flex;
      justify-content: space-between;
      margin-top: 100px;
      padding-left: 40px;

      @include adopt(920px) {
        flex-direction: column;
        font-size: em(32);
        margin-top: 0;
        padding-left: 0;
      }

      &-item {
        display: flex;
        flex-direction: column;
        padding: 0 50px;
        width: 50%;

        @include adopt(920px) {
          margin-bottom: 40px;
          padding: 0;
          width: 100%;
        }

        &-title {
          color: $accentColor;
          font-family: Calibri, sans-serif;
          font-size: em(29);
          font-weight: bold;
          margin-bottom: 25px;

          @include adopt(920px) {
            font-size: em(48);
          }
        }

        &-description {
          p {
            margin-bottom: 25px;
          }
        }

        &-map {
          height: 350px;
          margin-top: auto;
          width: 100%;
        }
      }
    }

    &-resource-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 80px -50px 60px;

      @include adopt(920px) {
        font-size: em(32);
        margin: 40px 0 60px;
      }

      &-item {
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 0 50px;
        width: 50%;

        @include adopt(480px) {
          padding: 8px 0;
          width: 100%;
        }

        &-icon {
          height: 25px;
          width: 30px;
        }

        &-label {
          margin: 6.25px 0 12.5px;
          text-align: center;

          &-link {
            white-space: nowrap;

              &:hover {
              color: lighten($dark-text, 10%);
              border-bottom: 1px dashed lighten($dark-text, 10%);
            }
          }
        }
      }
    }

    &-requisites {
      &-title {
        color: $accentColor;
        font-family: Calibri, sans-serif;
        font-size: em(29);
        font-weight: bold;
        margin-bottom: 10px;

        @include adopt(920px) {
          font-size: em(48);
        }
      }

      &-inside {
        @include adopt(920px) {
          font-size: em(32);
        }

        p {
          margin-bottom: 10px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
</style>

<script>
  import vMenu from '@/js/components/pages/home/menu.vue';
  import vPhones from '@/js/components/common/phones.vue';

  export default {
    data() {
      return {
        list: [
          {
            icon: 'icon-2.svg',
            label: 'rcsumarokovo',
            link: 'https://vk.com/rcsumarokovo'
          },
          {
            icon: 'icon-3.svg',
            label: 'bratstvo.44@mail.ru',
            link: 'mailto:bratstvo.44@mail.ru'
          },
          {
            icon: 'icon-4.svg',
            label: 'rcsumarokovo',
            link: 'https://www.facebook.com/rcsumarokovo'
          },
          {
            icon: 'icon-5.svg',
            label: 'maksim221077',
            link: 'skype:maksim221077?call'
          },
          {
            icon: 'icon-6.svg',
            label: 'bf.p.gennadiyakil',
            link: 'https://www.instagram.com/bf.p.gennadiyakil/'
          }
        ],
        title: 'Контакты'
      }
    },
    mounted() {
      this.createMaps();
      document.title = this.title;
    },
    components: {
      vMenu,
      vPhones
    },
    methods: {
      createMaps() {
        ymaps.ready(init);
        let map_1, map_2;

        function init() {
          console.log(ymaps);
            map_1 = new ymaps.Map ("map-1", {
                center: [58.20448312849425,41.797698000000004],
                zoom: 10
            });
            map_1.geoObjects.add(new ymaps.Placemark([58.20448312849425,41.797698000000004], {
                hintContent: 'РЦ «Сумароково»',
                balloonContent: '157084, Россия, Костромская область, Сусанинский район, село Сумароково, улица Центральная, 14'
            }));

            map_2 = new ymaps.Map ("map-2", {
                center: [57.77144156683215,40.92315699999991],
                zoom: 15
            });
            map_2.geoObjects.add(new ymaps.Placemark([57.77144156683215,40.92315699999991], {
                hintContent: 'Группа взаимопомощи',
                balloonContent: 'г. Кострома, Кадыевский переулок, 2'
            }));
        }
      },
      iconStyle(icon) {
        return 'background: url(\'/img/pages/contacts/' + icon + '\') no-repeat center / contain;';
      }
    }
  }
</script>
