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
    </div>
</template>

<style lang="scss">
    @import 'src/scss/_variables.scss';
    @import 'src/scss/_mixins.scss';

    .adopt-callback {
        font-family: Garamond, serif;
        padding: $padding 0;

        &-title {
            font-size: em(48);
            text-align: center;
        }

        &-tagline {
            font-size: em(48);
            font-weight: bold;
            margin: $margin 0;
            text-align: center;
        }

        &-phones {
            font-size: em(48);
            font-weight: bold;
            text-align: center;
        }
    }
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