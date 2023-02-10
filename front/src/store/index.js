import { createStore } from 'vuex'

export default createStore({
    state: {
        token: null
    },
    mutations: {
        setUser(state, token){
            state.token = token
        }
    },
    getters: {
        authenticated(state){
            return !!state.token
        }
    },
})