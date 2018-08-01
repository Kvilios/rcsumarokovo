<template>
    <div id="menu" class="menu">
        <div class="layout">
            <div class="menu-wrapper">
                <button class="menu-button" @click="toggleMenu">Меню</button>
                <transition name="fade-opacity">
                    <div class="menu-wrapper-wrapper" v-if="menuIsActive">
                        <button class="menu-close" @click="toggleMenu">Закрыть</button>
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

    .menu {
        background-color: $accentColor;

        &-wrapper {
            margin-left: 262px;

            &-wrapper {
                background-color: white;
                bottom: 0;
                height: 100%;
                left: 0;
                position: fixed;
                right: 0;
                width: 100%;
                top: 0;
                z-index: 2;
            }
        }

        &-button {

        }

        &-list {
            &-item {

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
