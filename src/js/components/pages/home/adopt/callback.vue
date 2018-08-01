<template>
    <div class="adopt-callback">
        <h1 class="adopt-callback-title">
            Церковная помощь<br>
            алко- и наркозависимым
        </h1>
        <p class="adopt-callback-tagline">
            Звони!<br>
            Поможем!
        </p>
        <ul class="adopt-callback-phones">
            <li>
                +7 (915) 901 27 77
            </li>
        </ul>
        <!-- <p class="adopt-callback-callme" @click="showCallback">
            <img src="/img/pages/home/banner/icon.png" alt="">
            <span>
                Обратный звонок
              </span>
        </p>
        <modal name="adopt-callback-modal">
            <div class="adopt-callback-modal-wrapper">
                <h2 class="adopt-callback-modal-wrapper-title">
                    Мы перезвоним Вам!
                </h2>
                <form class="adopt-callback-modal-wrapper-form" @submit.prevent="sendForm">
                    <input type="text" v-model="formData.name" placeholder="Ваше имя" required>
                    <masked-input type="tel" v-model="formData.phone" placeholder="Ваш телефон" mask="\+\7 (111) 111-11-11" required />
                    <button type="submit animate">
                        Заказать звонок
                    </button>
                </form>
            </div>
        </modal> -->
    </div>
</template>

<style lang="scss">
    @import 'src/scss/_variables.scss';
    @import 'src/scss/_mixins.scss';
</style>

<script>
    import MaskedInput from 'vue-masked-input';
    import axios from 'axios';

    export default {
        data() {
            return {
                formData: {
                    name: '',
                    phone: ''
                }
            }
        },
        methods: {
            sendForm() {
                if (this.formData.name.length > 1 && this.formData.phone.length == 18) {
                    let then = this;
                    axios.post('/actions/mail.php', this.formData)
                        .then(function (response) {
                            alert('Сообщение отправлено!');
                            then.formData.name = '';
                            then.formData.phone = '';
                            then.hideCallback();
                        })
                        .catch(function (error) {
                            alert('Произошла ошибка!');
                            console.log(error);
                        });
                }
            },
            showCallback() {
                this.$modal.show('adopt-callback-modal');
            },
            hideCallback() {
                this.$modal.hide('adopt-callback-modal');
            }
        },
        components: {
            MaskedInput
        }
    }
</script>