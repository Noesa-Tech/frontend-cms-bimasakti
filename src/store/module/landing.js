import Api from '@/api/api'
const landing = {
    namespaced: true,
    state: {
        isLoading : false,
        listService : []
    },
    mutations: {
        SET_LOADING(state, status) {
            state.isLoading = status
        },
        SAVE_LIST_SERVICE(state, data) {
            state.listService = data
        },
    },
    actions: {
        async getService({ commit }, params) {
            commit('SET_LOADING', true)
            try {
                const res = await Api.get('/services')
                commit('SAVE_LIST_SERVICE', res.data)
                
                return res
            } catch (error) {
                throw error
            } finally {
                commit('SET_LOADING', false)
            }
        },
    },
    getters: {
        isLoading(state) {
            return state.login.isLoading
          },
    }

}

export default landing