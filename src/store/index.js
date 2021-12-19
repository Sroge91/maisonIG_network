import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const project_URL = "http://localhost:8055"
    //const project_URL = "http://192.168.1.124:8055"
const token = "Ix2cxDcfitgLrI8NdvHsseIB";
const axios = require('axios');



export default new Vuex.Store({
    state: {
        status: '',
        userInfos: {
            nom: '',
            prenom: '',
            email: '',
        },
    },
    mutations: { //commit state
        setStatus: function(state, status) {
            state.status = status;
        },
        userInfos: function(state, userInfos) {
            state.userInfos = userInfos;
        },

    },
    actions: { //commit mutations
        login: ({ commit }, userInfos) => {
            commit('setStatus', 'loading');
            axios({
                method: "get",
                url: project_URL + "/items/users",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((response) => {
                console.log(userInfos);
                let idUser = response.data.data.find(x => x.email === userInfos.email).id;
                if (userInfos.password === response.data.data[idUser - 1].password) {
                    console.log("Successfull Login !")
                    commit('setStatus', 'connected')
                    commit('userInfos', { nom: response.data.data[idUser - 1].nom, prenom: response.data.data[idUser - 1].prenom, email: response.data.data[idUser - 1].email })
                } else {
                    console.log("wrong password")
                }

            });
        }
    },
    modules: {}
});