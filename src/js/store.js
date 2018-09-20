import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        admin: {
            formData: {
                email: '',
                password: '',
                remember: false,
                days: 1
            },
            title: 'Панель администратора',
            userData: {}
        },
        news: {
            list: [],
            title: 'Новости'
        }
    },
    getters: {
        adminData(state) {
            return state.admin
        },
        newsData(state) {
            return state.news
        }
    },
    actions: {
        loadNews({ commit }) {
            axios.post('/actions/news.php', {all: true})
            .then(response => {
                if (response.data === 'error') {
                    alert('Произошла ошибка!')
                    console.log('Код ошибки: 2')
                }
                else commit('updateNewsList', response.data)
            })
            .catch(error => {
                alert('Произошла ошибка!')
                console.log('Код ошибки: 1')
            })
        },
        saveNews(state) {
            axios.post('/actions/news.php', {list: state.getters.newsData.list})
            .then(response => {
                if (response.data === 'error') {
                    alert('Произошла ошибка!')
                    console.log('Код ошибки: 2')
                }
                else alert('Сохранено!')
            })
            .catch(error => {
                alert('Произошла ошибка!')
                console.log('Код ошибки: 1')
            })
        }
    },
    mutations: {
        clearAdminFormData(state) {
            state.admin.formData.email = ''
            state.admin.formData.password = ''
            state.admin.formData.remember = false
            state.admin.formData.days = 1
        },
        updateAdminUserData(state, data) {
            state.admin.userData = data
        },
        updateNewsList(state, data) {
            state.news.list = data
        },
        saveNewsItem(state, data) {
            axios.post('/actions/news.php', {save: true, item: data})
            .then(response => {
                if (response.data === 'error') {
                    alert('Произошла ошибка!')
                    console.log('Код ошибки: 2')
                }
                else alert('Ok')
            })
            .catch(error => {
                alert('Произошла ошибка!')
                console.log('Код ошибки: 1')
            })
        },
        updateNewsItemHidden(state, data) {
            axios.post('/actions/news.php', {toggleHidden: true, id: data.id})
            .then(response => {
                if (response.data === 'error') {
                    alert('Произошла ошибка!')
                    console.log('Код ошибки: 2')
                }
                else {
                    const i = state.news.list.findIndex(el => el.id === data.id)
                    if (i > -1) state.news.list[i].hidden = !data.hidden
                }
            })
            .catch(error => {
                alert('Произошла ошибка!')
                console.log('Код ошибки: 1')
            })
        },
        updateNewsItemImage(state, data) {
            const i = state.news.list.findIndex(el => el.id === data.id)
            if (i > -1) state.news.list[i].image = data.image
        },
        deleteNewsItem(state, data) {
            axios.post('/actions/news.php', {remove: true, id: data.id})
            .then(response => {
                if (response.data === 'error') {
                    alert('Произошла ошибка!')
                    console.log('Код ошибки: 2')
                }
                else {
                    const i = state.news.list.findIndex(el => el.id === data.id)
                    if (i > -1) state.news.list.splice(i, 1)
                }
            })
            .catch(error => {
                alert('Произошла ошибка!')
                console.log('Код ошибки: 1')
            })
        },
        createNewsItem(state) {
            axios.post('/actions/news.php', {create: true})
            .then(response => {
                if (response.data === 'error') {
                    alert('Произошла ошибка!')
                    console.log('Код ошибки: 2')
                }
                else state.news.list.unshift(response.data)
            })
            .catch(error => {
                alert('Произошла ошибка!')
                console.log('Код ошибки: 1')
            })
        }
    }
})