<template>
  <div class="tabs">
    <template v-if="currentAdopt && (currentAdopt === 768 || currentAdopt === 480)">
      <div class="layout">
        <h2 class="tabs-title">
          Реабилитация зависимых
        </h2>
        <ul class="tabs-list">
          <li class="tabs-list-item" v-if="index < 2" :class="{'active': firstTabsIndex === index}" v-for="listItem, index in list" @click="updateActive(listItem)">
            <div class="tabs-list-item-icon">
              <img :src="listItemSrc(listItem.icon)" alt="">
            </div>
            <div class="tabs-list-item-name animate">
              <p v-html="listItem.name"></p>
              <p class="tabs-list-item-name-period" v-if="listItem.period">
                {{ listItem.period }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="tabs-content">
        <div class="layout">
          <p class="tabs-content-description" v-html="activeFirstTabs.content.description"></p>
          <ul class="tabs-content-groups" v-if="activeFirstTabs === list[list.length - 1]">
            <li class="tabs-content-groups-item" v-for="groupsItem in activeFirstTabs.content.groups">
              <div class="tabs-content-groups-item-header">
                <img :src="listItemSrc(groupsItem.icon)" alt="">
                <h3 class="tabs-content-groups-item-header-title">
                  {{ groupsItem.name }}
                </h3>
              </div>
              <ul class="tabs-content-groups-item-list">
                <li class="tabs-content-groups-item-list-item" v-for="listItem in groupsItem.list" v-html="listItem"></li>
              </ul>
            </li>
          </ul>
          <ul class="tabs-content-list" :class="{'first': isFirstTab}" v-else>
            <li class="tabs-content-list-item" :class="[{'first': activeFirstTabs === list[0]}, {'second': activeFirstTabs === list[1]}, {'third': activeFirstTabs === list[2]}]" v-for="listItem in activeFirstTabs.content.list">
              <span v-html="listItem"></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="layout">
        <ul class="tabs-list">
          <li class="tabs-list-item" v-if="index > 1" :class="{'active': lastTabsIndex === index}" v-for="listItem, index in list" @click="updateActive(listItem)">
            <div class="tabs-list-item-icon">
              <img :src="listItemSrc(listItem.icon)" alt="">
            </div>
            <div class="tabs-list-item-name animate">
              <p v-html="listItem.name"></p>
              <p class="tabs-list-item-name-period" v-if="listItem.period">
                {{ listItem.period }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="tabs-content">
        <div class="layout">
          <p class="tabs-content-description" v-html="activeLastTabs.content.description"></p>
          <ul class="tabs-content-groups" v-if="activeLastTabs === list[list.length - 1]">
            <li class="tabs-content-groups-item" v-for="groupsItem in activeLastTabs.content.groups">
              <div class="tabs-content-groups-item-header">
                <img :src="listItemSrc(groupsItem.icon)" alt="">
                <h3 class="tabs-content-groups-item-header-title">
                  {{ groupsItem.name }}
                </h3>
              </div>
              <ul class="tabs-content-groups-item-list">
                <li class="tabs-content-groups-item-list-item" v-for="listItem in groupsItem.list" v-html="listItem"></li>
              </ul>
            </li>
          </ul>
          <ul class="tabs-content-list" :class="{'first': isFirstTab}" v-else>
            <li class="tabs-content-list-item" :class="[{'first': activeLastTabs === list[0]}, {'second': activeLastTabs === list[1]}, {'third': activeLastTabs === list[2]}]" v-for="listItem in activeLastTabs.content.list">
              <span v-html="listItem"></span>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="layout">
        <h2 class="tabs-title">
          Реабилитация алко- и наркозависимых
        </h2>
        <ul class="tabs-list">
          <li class="tabs-list-item" :class="{'active': listItem.active}" v-for="listItem in list" @click="updateActive(listItem)">
            <div class="tabs-list-item-icon">
              <img :src="listItemSrc(listItem.icon)" alt="">
            </div>
            <div class="tabs-list-item-name animate">
              <p v-html="listItem.name"></p>
              <p class="tabs-list-item-name-period" v-if="listItem.period">
                {{ listItem.period }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="tabs-content">
        <div class="layout">
          <p class="tabs-content-description" v-html="activeTab.content.description"></p>
          <ul class="tabs-content-groups" v-if="activeTab === list[list.length - 1]">
            <li class="tabs-content-groups-item" v-for="groupsItem in activeTab.content.groups">
              <div class="tabs-content-groups-item-header">
                <img :src="listItemSrc(groupsItem.icon)" alt="">
                <h3 class="tabs-content-groups-item-header-title">
                  {{ groupsItem.name }}
                </h3>
              </div>
              <ul class="tabs-content-groups-item-list">
                <li class="tabs-content-groups-item-list-item" v-for="listItem in groupsItem.list" v-html="listItem"></li>
              </ul>
            </li>
          </ul>
          <ul class="tabs-content-list" :class="{'first': isFirstTab}" v-else>
            <li class="tabs-content-list-item" :class="[{'first': activeTab === list[0]}, {'second': activeTab === list[1]}, {'third': activeTab === list[2]}]" v-for="listItem in activeTab.content.list">
              <span v-html="listItem"></span>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .tabs {
    box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.125);

    &-title {
      font-size: em(48);
      margin-bottom: $margin;
      padding: $padding 0;
      text-align: center;
    }

    &-list {
      display: flex;
      justify-content: space-between;
      margin: 0 -12px;

      @include adopt(768px) {
        justify-content: center;
      }

      &-item {
        align-items: center;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        font-family: Garamond, serif;
        padding: 0 12px;
        position: relative;
        text-align: center;
        width: 25%;

        @include adopt(768px) {
          width: 50%;
        }

        &-icon {
          align-items: center;
          border-bottom: 2px solid $accentColor;
          display: flex;
          flex-direction: column;
          height: 130px;
          justify-content: flex-end;
          width: 100%;

          img {
            display: block;
            margin-top: -1px;
            position: relative;
            top: 1px;
          }
        }

        &-name {
          align-items: center;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          padding: 8px $padding;
          width: 100%;

          &-period {
            color: $accentColor;
            font-family: 'Calibri', sans-serif;
            font-size: em(19);
            font-weight: bold;
            margin-top: auto;
          }
        }

        &.active {
          .tabs-list-item-name {
            background-color: $light;
            box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.125);
          }
        }
      }
    }

    &-content {
      align-items: center;
      background-color: $light;
      display: flex;
      height: 390px;
      justify-content: center;
      padding: $padding 0;
      position: relative;

      @include adopt(920px) {
        height: auto;
      }

      &-description {
        color: $blue;
        font-size: em(30);
        font-weight: bold;
        margin: 0 auto;
        text-align: center;
      }

      &-groups {
        display: flex;
        justify-content: space-between;

        &-item {
          padding: 0 20px;
          width: 50%;

          &-header {
            align-items: center;
            display: flex;
            justify-content: center;
            padding-top: 24px;

            img {
              flex-shrink: 0;
              margin-right: 8px;
            }

            &-title {
              font-family: 'Calibri', sans-serif;
              font-weight: bold;
            }
          }

          &-list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin: 0 -12px;

            &-item {
              display: flex;
              padding: 10px 12px 0;
              width: 50%;

              @include adopt(768px) {
                width: 100%;
              }

              &::before {
                background-color: $green;
                border-radius: 50%;
                content: '';
                display: block;
                flex-shrink: 0;
                height: 10px;
                margin: 12px 10px 0 0;
                width: 10px;
              }
            }
          }
        }
      }

      &-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 -12px;

        &.first &-item {
          width: 33.3%;

          @include adopt(768px) {
            width: 50%;
          }
        }

        &-item {
          display: flex;
          padding: 10px 12px 0;
          width: 25%;

          @include adopt(768px) {
            width: 50%;
          }

          &::before {
            background-color: $green;
            border-radius: 50%;
            content: '';
            display: block;
            flex-shrink: 0;
            height: 10px;
            margin: 12px 10px 0 0;
            width: 10px;
          }

          &.first {
            padding-top: 40px;
          }

          &.second {
            padding-top: 40px;
          }

          &.third {
            padding-top: 40px;
          }
        }
      }
    }
  }
</style>

<script>
  export default {
    mounted() {
        this.list.forEach((el, i) => {
          TweenMax.fromTo('.tabs-list-item:nth-child(' + (i + 1) + ')', 1, {opacity: 0, top: 100}, {opacity: 1, top: 0, ease: Back.easeOut.config(1.7), delay: i / 10});
        });
        this.updateActive(this.list[0]);
    },
    computed: {
      activeTab() {
          return this.list.find(el => el.active === true);
      },
      activeFirstTabs() {
          let result;
          for (let i = 0; i < this.tabsStatus.firstTabs.length; i++) {
              if (this.tabsStatus.firstTabs[i]) {
                  result = this.list[i];
                  break;
              }
          }
          return result;
      },
      activeLastTabs() {
          let result;
          for (let i = 0; i < this.tabsStatus.lastTabs.length; i++) {
              if (this.tabsStatus.lastTabs[i]) {
                  result = this.list[i + 2];
                  break;
              }
          }
          return result;
      },
      isFirstTab() {
        return this.activeTab === this.list[0];
      },
      currentAdopt() {
          let result;
          if (this.adopt >= 0 && this.adopt <= 480) result = 480;
          else if (this.adopt > 480 && this.adopt <= 768) result = 768;
          else if (this.adopt > 768 && this.adopt <= 920) result = 920;
          return result;
      },
      firstTabsIndex() {
          let index;
          for (let i = 0; i < this.tabsStatus.firstTabs.length; i++) {
              if (this.tabsStatus.firstTabs[i]) {
                  index = i;
                  break;
              }
          }
          return index;
      },
      lastTabsIndex() {
          let index;
          for (let i = 0; i < this.tabsStatus.lastTabs.length; i++) {
              if (this.tabsStatus.lastTabs[i]) {
                  index = i;
                  break;
              }
          }
          return index + 2;
      }
    },
    data() {
      return {
        adopt: 0,
        list: [
          {
            active: false,
            content: {
              description: 'В этот период специалисты:',
              list: [
                'Определяют<br>настрой человека<br>на реабилитацию.',
                'Выявляют склонность<br>к какому-либо виду<br>реабилитации.',
                'Готовят человека<br>к прохождению полного<br>курса реабилитации.',
                'Выявляют<br>необходимость особых<br>условий реабилитации.',
                'Устанавливают<br>ВИЧ-статус.',
                'Знакомят<br>со священником.'
              ]
            },
            icon: 'icon-1.png',
            name: 'Мотивация',
            period: '1-3 месяцев'
          },
          {
            active: false,
            content: {
              description: 'Реабилитация происходит по программе<br>«Методологии социальной реабилитации наркозависимых в церковной общине»',
              list: [
                'В центре проживают<br>10-12 мужчин.',
                'Посещение центра<br>посторонними<br>ограничено.',
                'Индивидуальные<br>и групповые занятия<br>с психологом.',
                'Культурные<br>мероприятия.',
                'Информационная безопасность<br>и анонимность.',
                'Соблюдается<br>распорядок дня.',
                'Трудовое послушание -<br>хозяйственная<br>деятельность<br>на территории Центра.',
                'Воцерковление.'
              ]
            },
            icon: 'icon-2.png',
            name: 'Реабилитация<br>в РЦ Сумароково',
            period: '12-18 месяцев'
          },
          {
            active: false,
            content: {
              description: 'Процесс постепенного ценностно-ориентированного вхождения<br>в общество после периода основной реабилитации помогает:',
              list: [
                'Восстановить утраченные документы.',
                'Проанализировать<br>и попробовать<br>возникающие проблемы.',
                'Создать<br>собственную систему<br>поддержки.',
                'Развить навыки<br>самообслуживания.',
                'Выработать<br>социальные навыки.',
                'Составить<br>стратегический план<br>жизни (на 1 год).',
                'Подготовить<br>к возвращению<br>в социальную среду.',
                'Трудоустроиться.'
              ]
            },
            icon: 'icon-3.png',
            name: 'Ресоциализация',
            period: '4-6 месяцев'
          },
          {
            active: false,
            content: {
              description: 'Группы представляют особую форму помощи<br>и могут быть полезны на разных стадиях процесса',
              groups: [
                {
                  icon: 'icon-5.png',
                  list: [
                    'Участие могут<br>принимать все<br>желающие.',
                    'Ведет группу<br>священник.',
                    'Каждая группа<br>посвящена<br>какой-либо теме.',
                    'По пятницам в 18:00<br>по адресу:<br>Кадыевский пер., 2.'
                  ],
                  name: 'Группа Взаимопомощи'
                },
                {
                  icon: 'icon-6.png',
                  list: [
                    'Участники обсуждают<br>произошедшие<br>события.',
                    'Разбирают<br>проявления старого<br>поведения.',
                    'Обмениваются<br>опытом преодоления<br>трудностей.',
                    'Священник присутствует,<br>но не ведет.',
                    'По воскресеньям.'
                  ],
                  name: 'Skype - группа самопомощи “ЛОЗА”'
                }
              ]
            },
            icon: 'icon-4.png',
            name: 'Группы поддержки для наркозависимых и их близких'
          }
        ],
        tabsStatus: {
            firstTabs: [true, false],
            lastTabs: [true, false]
        }
      }
    },
    methods: {
      updateActive(item) {
          if (this.currentAdopt === 768 || this.currentAdopt === 480) {
              let index = this.list.indexOf(item), result = [];
              if (index < 2) {
                  for (let i = 0; i < this.tabsStatus.firstTabs.length; i++) result.push(i === index);
                  this.tabsStatus.firstTabs = result;
              }
              else {
                  for (let i = 0; i < this.tabsStatus.lastTabs.length; i++) result.push(i === index - 2);
                  this.tabsStatus.lastTabs = result;
              }
          }
          else {
              this.list.forEach(el => {
                  el.active = false;
              });
              item.active = true;
          }
      },
      listItemSrc(icon) {
        return '/img/pages/home/tabs/' + icon;
      },
      updateAdopt(e = null) {
          this.adopt = window.outerWidth;
      }
    },
    created() {
        window.addEventListener('resize', this.updateAdopt);
        this.updateAdopt();
    },
    beforeDestroy() {
        window.addEventListener('resize', this.updateAdopt);
    }
  }
</script>
