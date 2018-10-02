<template>
    <div id="menu" class="menu">
        <div class="layout">
            <div class="menu-wrapper">
                <button class="menu-button" @click="toggleMenu">
                    Меню
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
                            <path class="icon" d="M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z" />
                    </svg>

                </button>
                <transition name="fade-opacity">
                    <div class="menu-wrapper-wrapper" v-if="menuIsActive">
                        <button class="menu-close" @click="toggleMenu">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.9 21.9" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 21.9 21.9">
                                <path class="icon" d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z"/>
                            </svg>
                        </button>
                        <menu class="menu-list">
                            <li class="menu-list-item animate" :class="{'active': active(listItem.link)}" v-for="listItem in list">
                                <router-link :to="listItem.link">
                                    {{ listItem.name }}
                                </router-link>
                            </li>
                        </menu>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import 'src/scss/_variables.scss';
    @import 'src/scss/_mixins.scss';

    .menu {
        background-color: $accentColor;

        &-wrapper {
            display: flex;
            justify-content: flex-end;
            margin-left: 272px;
            padding: $padding 0;

            @include adopt(480px) {
                justify-content: flex-start;
            }

            &-wrapper {
                align-items: center;
                background-color: white;
                bottom: 0;
                display: flex;
                height: 100%;
                justify-content: center;
                left: 0;
                position: fixed;
                right: 0;
                width: 100%;
                top: 0;
                z-index: 2;
            }
        }

        &-button {
            background-color: rgba(0, 0, 0, 0);
            border: none;
            color: white;
            display: flex;
            font-family: Garamond, serif;
            font-size: em(32);

            svg {
                height: 32px;
                margin-left: 10px;
                width: 32px;

                .icon {
                    fill: white;
                }
            }
        }

        &-list {
            border-top: 1px dashed $accentColor;
            flex-grow: 1;
            font-size: em(24);

            &-item {
                border-bottom: 1px dashed $accentColor;
                padding: $padding 0;
                text-align: center;
                width: 100%;

                &.active {
                    background-color: $light;
                }

                a {
                    display: block;
                    width: inherit;
                }
            }

            @include adopt(768px) {
                font-size: em(32);
            }

            @include adopt(480px) {
                font-size: em(48);
            }
        }

        &-close {
            background-color: rgba(0, 0, 0, 0);
            border: none;
            height: 24px;
            position: absolute;
            right: $margin;
            top: $margin;
            width: 24px;

            svg {
                .icon {
                    fill: $accentColor;
                }
            }
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                menuIsActive: false,
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
            },
            toggleMenu() {
                this.menuIsActive = !this.menuIsActive;
            }
        }
    }
</script>
