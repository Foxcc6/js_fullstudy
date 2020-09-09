import * as type from '../types'

const state = {
    showSidebar:false
}

const getters = {
    showSidebar:state => state.showSidebar
}

const mutations = {
    [type.COM_SHOW_SIDE_BAR](state,status) {
        state.showSidebar = status
    }
}

const actions = {
    setShowSiderbar(context,status) {
        context.commit(type.COM_SHOW_SIDE_BAR,status)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
