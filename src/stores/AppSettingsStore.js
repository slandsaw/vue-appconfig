/*global fetch*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        message: ''
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
        updateMessage(state, payload) {
            state.message = payload;
        },
        loadAppSettings(state, payload) {
            state.appSettings = payload;
        }
    },
    actions: {
        refreshMessage(context) {
            return new Promise((resolve) => {
                fetch('https://vue-appsetting-bluerose.c9users.io:8081/appSettings/1')
                .then(response => response.json())
                .then((json) => {
                    context.commit('updateMessage', json.setting);
                    resolve();
                });
            });
        },
        loadAppSettings(context) {
            return new Promise((resolve) => {
                fetch('https://vue-appsetting-bluerose.c9users.io:8081/appSettings')
                .then(response => response.json())
                .then((json) => {
                    context.commit('loadAppSettings', json);
                    resolve();
                });
            });
        }
    }
})

export default store;
