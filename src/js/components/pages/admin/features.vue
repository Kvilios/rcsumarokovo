<template>
    <div class="features" v-if="!isClosed && isVisible">
        <button class="features-close" @click="close">Закрыть</button>
        <slot />
        <p class="features-ps" v-html="`Это уведомление <u>окончательно</u> исчезнет автоматически ${toDate}`" />
    </div>
</template>

<style lang="scss">
  @import '~@/scss/_variables.scss';
  @import '~@/scss/_mixins.scss';

  .features {
    background-color: yellow;
    padding: $padding / 4 $padding / 2;

    &-close {
        float: right;
        margin-left: $margin / 2px;
    }

    &-ps {
        font-size: em(16);
        margin-top: $margin / 4;
    }
  }
</style>

<script>
  import moment from 'moment';

  export default {
    computed: {
        isVisible() {
            const currentDate = moment();
            const toDate = moment(this.date);
            
            return (currentDate.diff(toDate) < 0);
        },
        toDate() {
            return `<strong>${moment(this.date).format('DD.MM.YYYY')}</strong> в <strong>${moment(this.date).format('HH:mm:ss')}</strong>`;
        }
    },
    data() {
        return {
            isClosed: false
        }
    },
    methods: {
        close() {
            this.isClosed = true;
        }
    },
    props: ['date']
  }
</script>
