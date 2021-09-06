  
import axios from 'axios';

const state = {
    user_token: null,
    authenticated: false,
};

const getters = {};

const actions = {
    async setAuthUserToken({ commit }, payload) {
        await commit('SET_AUTH_USER_TOKEN', payload);
    },

    async unsetAuthUserToken({ commit }) {
        await commit('UNSET_AUTH_USER_TOKEN');
    }
};

const mutations = {
    SET_AUTH_USER_TOKEN(state, payload) {
        state.user_token = payload;
        state.authenticated = true;
    },

    UNSET_AUTH_USER_TOKEN(state) {
        state.user_token = null;
        state.authenticated = false;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};