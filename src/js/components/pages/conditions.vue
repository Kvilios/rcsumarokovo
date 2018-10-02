<template>
  <div id="conditions" class="conditions">
    <div class="adopt920">
        <v-menu />
    </div>
    <v-phones />
    <div class="layout">
      <div class="conditions-wrapper">
        <div class="conditions-tabs">
          <ul class="conditions-tabs-list">
            <template v-if="currentAdopt">
              <li class="conditions-tabs-list-item animate" :class="{'active': tab.isActive}" v-for="tab in content.tabs" @click="selectTab(tab)">
                {{ removeBr(tab.name) }}
              </li>
            </template>
            <template v-else>
              <li class="conditions-tabs-list-item animate" :class="{'active': tab.isActive}" v-for="tab in content.tabs" @click="selectTab(tab)" v-html="tab.name"></li>
            </template>
          </ul>
        </div>
        <div class="conditions-content" v-if="isMemo">
          <div class="memo">
            <h2 class="memo-title">
              Памятка для поступающего на церковную реабилитацию
            </h2>
            <p>
              Для приема на реабилитацию необходимо выполнить ряд действий:
            </p>
            <div class="memo-wrapper">
              <ul>
                <li>
                  осознать наличие у себя проблемы наркомании и желания справиться с ней;
                </li>
                <li>
                  пройти первичную консультацию, которая назначается по согласованию по телефону. На консультацию приглашаются также родственники и/или друзья;
                </li>
                <li>
                  ознакомиться с памяткой, правилами жизни в общине, списком необходимых вещей (см. в приложении);
                </li>
                <li>
                  уведомлять 1 раз в неделю в оговоренное время консультанта первичного приема по телефону;
                </li>
                <li>
                  посещать группу подготовительного периода, которая проводится в 1 раз в неделю на базе первичного приема;
                </li>
              </ul>
              <ul>
                <li>
                  <span>
                    собрать необходимые медицинские&nbsp;<a class="animate" @click.prevent="selectTab(content.tabs[1])" href="#">справки</a>;
                  </span>
                </li>
                <li>
                  вылечить зубы;
                </li>
                <li>
                  собрать вещи первой необходимости по списку;
                </li>
                <li>
                  за 10 дней до назначенной даты подтвердить свое решение о прибытии на реабилитацию по телефону;
                </li>
                <li>
                  взять деньги на обратный билет (хранятся у сопровождающего родственника);
                </li>
                <li>
                  прибыть на РЦ «Сумароково» в назначенный день в сопровождении кого-либо из близких родственников.
                </li>
              </ul>
            </div>
            <strong>
              Срок воздержания от наркотиков и алкоголя (любых веществ, изменяющих сознание) должен быть не менее 10 дней.
            </strong>
          </div>
        </div>
        <div class="conditions-content" v-else v-html="activeContent"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .conditions {
    &-wrapper {
      display: flex;
      justify-content: space-between;

      @include adopt(920px) {
        flex-direction: column;
        margin: 0;
      }
    }

    &-tabs {
      flex-shrink: 0;
      margin-right: 16px;
      width: 262px;

      @include adopt(920px) {
        margin: 0 0 20px;
        width: 100%;
      }

      &-list {
        align-items: flex-start;
        display: flex;
        flex-direction: column;

        @include adopt(920px) {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: -$margin;
        }

        &-item {
          color: $accentColor;
          cursor: pointer;
          font-size: em(19);
          font-weight: bold;
          margin: 40px 0 0 46px;

          @include adopt(920px) {
            font-size: em(32);
            margin: $margin $margin 0;
          }

          &:hover {
            color: lighten($accentColor, 10%);
          }

          &.active {
            color: $dark-text;
          }
        }
      }
    }

    &-content {
      flex-grow: 1;
    }

    .memo {
      font-size: em(19);

      @include adopt(920px) {
        font-size: em(32);
      }

      &-title {
        font-size: 32px;

        @include adopt(920px) {
          font-size: em(48);
        }
      }

      p {

      }

      &-wrapper {
        display: flex;
        justify-content: space-between;
        margin: 0 -23px 20px -43px;

        @include adopt(768px) {
          flex-direction: column;
          margin: 0 0 20px;
        }

        ul {
          margin: 0 23px 0;
          width: calc(50% - 46px);

          @include adopt(768px) {
            margin: 0;
            width: 100%;
          }

          li {
            align-items: flex-start;
            display: flex;
            margin-top: 20px;

            &:before {
              background-color: $green;
              border-radius: 50%;
              content: '';
              display: block;
              flex-shrink: 0;
              height: 10px;
              margin-right: 10px;
              position: relative;
              top: 9px;
              width: 10px;
            }

            a {
              color: $dark-text;
              text-decoration: underline;

              &:hover {
                color: lighten($dark-text, 10%);
                text-decoration: none;
              }
            }
          }
        }
      }
    }

    .documents {
      font-size: em(19);

      @include adopt(920px) {
        font-size: em(32);
      }

      &-title {
        font-size: 32px;

        @include adopt(920px) {
          font-size: em(48);
        }
      }

      p {

      }

      &-wrapper {
        display: flex;
        justify-content: space-between;
        margin: 0 -23px 20px -43px;

        @include adopt(768px) {
          flex-direction: column;
          margin: 0 0 20px;
        }

        ul {
          margin: 0 23px 0;
          width: calc(50% - 46px);

          @include adopt(768px) {
            margin: 0;
            width: 100%;
          }

          li {
            align-items: flex-start;
            display: flex;
            margin-top: 20px;

            &:before {
              background-color: $green;
              border-radius: 50%;
              content: '';
              display: block;
              flex-shrink: 0;
              height: 10px;
              margin-right: 10px;
              position: relative;
              top: 9px;
              width: 10px;
            }
          }
        }
      }
    }

    .take {
      font-size: em(19);

      @include adopt(920px) {
        font-size: em(32);
      }

      &-title {
        font-size: 32px;
        text-align: center;

        @include adopt(920px) {
          font-size: em(48);
          text-align: left;
        }
      }

      p {

      }

      &-wrapper {
        display: flex;
        justify-content: space-between;
        margin: 0 -23px 20px -35px;

        @include adopt(768px) {
          flex-direction: column;
          margin: 0 0 20px;
        }

        > ul {
          margin: 0 15px 0;
          width: calc(50% - 30px);

          @include adopt(768px) {
            margin: 0;
            width: 100%;
          }

          > li {

            h3 {
              color: $accentColor;
              font-family: Calibri, sans-serif;
              font-size: 21px;
              font-weight: bold;
              margin: 20px 0 0 20px;

              @include adopt(920px) {
                font-size: em(32);
              }
            }

            ul {
              li {
                align-items: flex-start;
                display: flex;
                margin-top: 20px;

                &:before {
                  background-color: $green;
                  border-radius: 50%;
                  content: '';
                  display: block;
                  flex-shrink: 0;
                  height: 10px;
                  margin-right: 10px;
                  position: relative;
                  top: 9px;
                  width: 10px;
                }

                &.description {
                  font-style: italic;

                  &:before {
                    background-color: rgba($green, 0);
                  }
                }

                &.title {
                  &:before {
                    background-color: rgba($green, 0);
                  }
                }
              }
            }
          }
        }
      }
    }

    .ban {
      font-size: em(19);

      @include adopt(920px) {
        font-size: em(32);
      }

      &-title {
        font-size: 32px;
        text-align: center;

        @include adopt(920px) {
          font-size: em(48);
          text-align: left;
        }
      }

      p {

      }

      &-wrapper {
        display: flex;
        justify-content: center;

        @include adopt(768px) {
          flex-direction: column;
          margin: 0 0 20px;
        }

        ul {
          @include adopt(768px) {
            margin: 0;
            width: 100%;
          }

          li {
            align-items: flex-start;
            display: flex;
            margin-top: 20px;

            &:before {
              background-color: $green;
              border-radius: 50%;
              content: '';
              display: block;
              flex-shrink: 0;
              height: 10px;
              margin-right: 10px;
              position: relative;
              top: 9px;
              width: 10px;
            }
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
        adopt: 0,
        content: {
          tabs: [
            {
              isActive: true,
              name: 'Памятка<br>поступающего'
            },
            {
              isActive: false,
              name: 'Документы'
            },
            {
              isActive: false,
              name: 'Что взять с собой?'
            },
            {
              isActive: false,
              name: 'Что нельзя<br>привозить<br>в Центр?'
            }
          ],
          inside: [
             `
             <div class="documents">
               <h2 class="documents-title">
                 Что иметь на руках при постеплении?
               </h2>
               <div class="documents-wrapper">
                 <ul>
                   <li>
                     паспорт
                   </li>
                   <li>
                     водительское удостоверение (если имеется)
                   </li>
                   <li>
                     справка о согласовании выезда с органами надзора в том случае, если прибывший находится под подпиской о невыезде или в режиме надзора.
                   </li>
                 </ul>
                 <ul>
                   <li>
                     флюорография
                   </li>
                   <li>
                     анализ крови на RW, Hbs – ag, ВИЧ
                   </li>
                   <li>
                     В\Х анализ крови (АЛаТ, АСаТ)
                   </li>
                 </ul>
               </div>
               <strong>
                 От того, насколько Вы серьезно отнесетесь к подготовке для приезда в общину, зависит Ваше участие в процессе реабилитации. Помните, что подготовка – это уже начало выздоровления.
               </strong>
             </div>
             `,
             `
             <div class="take">
               <h2 class="take-title">
                 Список необходимых вещей
               </h2>
               <div class="take-wrapper">
                 <ul>
                  <li>
                    <h3>
                      Духовная литература:
                    </h3>
                    <ul>
                      <li>
                        <span>
                          Евангелие (Библия) Синодального перевода;
                        </span>
                      </li>
                      <li>
                        <span>
                          Молитвослов, содержащий утренние, вечерние молитвы, правило ко Святому Причащению.
                        </span>
                      </li>
                      <li class="description">
                        Указанные книги должны быть<br>удобочитаемы (не карманного формата).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h3>
                      Канцелярия:
                    </h3>
                    <ul>
                      <li>
                        <span>
                          тетради общие 96 листов (А4) – <strong>2</strong>&nbsp;шт.;
                        </span>
                      </li>
                      <li>
                        <span>
                          48 листов (А5) – <strong>1</strong>&nbsp;шт.;
                        </span>
                      </li>
                      <li>
                        <span>
                          ежедневник – <strong>1</strong>&nbsp;шт.;
                        </span>
                      </li>
                      <li>
                        <span>
                          блокнот отрывной (небольшого формата) – <strong>4</strong>&nbsp;шт.;
                        </span>
                      </li>
                      <li>
                        <span>
                          ручка шариковая – <strong>2</strong>&nbsp;шт.;
                        </span>
                      </li>
                      <li>
                        <span>
                          папка для хранения бумаг – <strong>1</strong>&nbsp;шт.;
                        </span>
                      </li>
                      <li>
                        <span>
                          конверты для писем – <strong>15</strong>&nbsp;шт.;
                        </span>
                      </li>
                      <li class="description">
                        Кто занимается рисованием, должен взять<br>с собой предметы для рисования (творческий досуг приветствуется).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h3>
                      Прочее:
                    </h3>
                    <ul>
                      <li>
                        <span>
                          будильник механический или электрический<br>(без радио);
                        </span>
                      </li>
                      <li>
                        <span>
                          часы наручные;
                        </span>
                      </li>
                      <li>
                        <span>
                          ежедневник – <strong>1</strong>&nbsp;шт.;
                        </span>
                      </li>
                      <li>
                        <span>
                          карманный фонарик (с запасным комплектом батареек);
                        </span>
                      </li>
                      <li>
                        <span>
                          одежная щетка;
                        </span>
                      </li>
                      <li>
                        <span>
                          фумигатор от комаров (с запасными баллончиками) - <strong>1</strong>&nbsp;шт.;
                        </span>
                      </li>
                      <li>
                        <span>
                          для людей с плохим зрением желательно иметь запасные очки;
                        </span>
                      </li>
                      <li>
                        <span>
                          два мульти теста на наличие в организме психоактивных веществ.
                        </span>
                      </li>
                    </ul>
                  </li>
                 </ul>
                 <ul>
                   <li>
                     <h3>
                       Предметы личной гигиены:
                     </h3>
                     <ul>
                       <li>
                         <span>
                           новое постельное белье х/б (наволочка, простыня, пододеяльник) – <strong>2</strong>&nbsp;комплекта;
                         </span>
                       </li>
                       <li>
                         <span>
                           полотенце банное – <strong>1</strong>&nbsp;шт.
                         </span>
                       </li>
                       <li>
                         <span>
                           полотенце личное – <strong>1</strong>&nbsp;шт.
                         </span>
                       </li>
                       <li>
                         <span>
                           зубная паста – <strong>5</strong>&nbsp;тюбиков;
                         </span>
                       </li>
                       <li>
                         <span>
                           зубные щетки – <strong>3</strong>&nbsp;шт.;
                         </span>
                       </li>
                       <li>
                         <span>
                           мыло туалетное – <strong>4</strong>&nbsp;шт.;
                         </span>
                       </li>
                       <li>
                         <span>
                           мыло банное – <strong>3</strong>&nbsp;шт.;
                         </span>
                       </li>
                       <li>
                         <span>
                           шампунь – в расчете <strong>на&nbsp;1&nbsp;год</strong> пребывания;
                         </span>
                       </li>
                       <li>
                         <span>
                           мочалка – <strong>3</strong>&nbsp;шт.;
                         </span>
                       </li>
                       <li>
                         <span>
                           ватные палочки для ушей – <strong>3</strong>&nbsp;уп.;
                         </span>
                       </li>
                       <li>
                         <span>
                           ножницы, предметы для ухода за ногтями;
                         </span>
                       </li>
                       <li>
                         <span>
                           расческа или щетка для волос;
                         </span>
                       </li>
                       <li>
                         <span>
                           бритвенные принадлежности – в расчете <strong>на&nbsp;1&nbsp;год</strong> пребывания (не требуется, если воспитанник настроен отращивать бороду, что приветствуется).
                         </span>
                       </li>
                     </ul>
                   </li>
                   <li>
                     <h3>
                       Одежда и обувь:
                     </h3>
                     <ul>
                       <li>
                         <span>
                           верхняя одежда (куртка, брюки, свитер) – по сезону в момент приезда (см.примечание).
                         </span>
                       </li>
                       <li class="title">
                         <span>
                           Необходимо иметь:
                         </span>
                       </li>
                       <li>
                         <span>
                           <strong>2</strong> рабочих комплекта одежды;
                         </span>
                       </li>
                       <li>
                         <span>
                           <strong>1</strong> повседневный комплект;
                         </span>
                       </li>
                       <li>
                         <span>
                           <strong>1</strong> выходной комплект одежды для посещения храмовых богослужений;
                         </span>
                       </li>
                       <li>
                         <span>
                           футболки – не менее <strong>4</strong>&nbsp;шт.;
                         </span>
                       </li>
                       <li>
                         <span>
                           нижнее белье и носки – в расчете <strong>на&nbsp;1,5&nbsp;года</strong>;
                         </span>
                       </li>
                       <li>
                         <span>
                           головные уборы по сезону, шарф;
                         </span>
                       </li>
                       <li>
                         <span>
                           перчатки (варежки) – <strong>2</strong> комплекта;
                         </span>
                       </li>
                       <li>
                         <span>
                           кроссовки или спортивные туфли – <strong>2</strong> пары;
                         </span>
                       </li>
                       <li>
                         <span>
                           ботинки или туфли выходные (по сезону) – <strong>1</strong> пара;
                         </span>
                       </li>
                       <li>
                         <span>
                           тапочки для посещения бани – <strong>1</strong> пара;
                         </span>
                       </li>
                       <li>
                         <span>
                           тапочки домашние – <strong>1</strong> пара;
                         </span>
                       </li>
                       <li>
                         <span>
                           сапоги резиновые – <strong>1</strong> пара;
                         </span>
                       </li>
                       <li>
                         <span>
                           перчатки рабочие – <strong>2</strong> пары.
                         </span>
                       </li>
                       <li class="description">
                         <span>
                           Примечание: нет необходимости брать всю одежду и обувь сразу в том случае, если родственники могут выслать недостающее по почте.
                         </span>
                       </li>
                     </ul>
                   </li>
                 </ul>
               </div>
             </div>
             `,
             `
             <div class="ban">
               <h2 class="ban-title">
                 Запрещено!
               </h2>
               <div class="ban-wrapper">
                 <ul>
                   <li>
                     книги (кроме указанных), журналы, газеты;
                   </li>
                   <li>
                     фотоаппараты;
                   </li>
                   <li>
                     кипятильники, электрочайники и кофеварки;
                   </li>
                   <li>
                     радиоприемники, DVD-видеопроигрыватели, ноутбуки;
                   </li>
                   <li>
                     лекарства, не назначенные врачом и не указанные в заключении терапевта;
                   </li>
                   <li>
                     спиртосодержащие жидкости (одеколон, дезодоранты и т.п.);
                   </li>
                   <li>
                     музыкальные инструменты.
                   </li>
                 </ul>
               </div>
             </div>
             `
          ]
        },
        title: 'Условия'
      }
    },
    created() {
      document.title = this.title;
      window.addEventListener('resize', this.updateAdopt);
      this.updateAdopt();
    },
    components: {
      vMenu,
      vPhones
    },
    computed: {
      isMemo() {
        return this.content.tabs[0].isActive;
      },
      activeContent() {
        let result;
        this.content.tabs.forEach((el, i) => {
          if (el.isActive) result = this.content.inside[i - 1];
        });
        return result;
      },
      currentAdopt() {
          let result;
          if (this.adopt >= 0 && this.adopt <= 480) result = 480;
          else if (this.adopt > 480 && this.adopt <= 768) result = 768;
          else if (this.adopt > 768 && this.adopt <= 920) result = 920;
          return result;
      }
    },
    methods: {
      selectTab(tab) {
        this.content.tabs.forEach(el => {
          el.isActive = el == tab;
        });
      },
      updateAdopt(e = null) {
          this.adopt = window.outerWidth;
      },
      removeBr(str) {
        return str.replace(/<br>/g, ' ');
      }
    },
    beforeDestroy() {
        window.addEventListener('resize', this.updateAdopt);
    }
  }
</script>
