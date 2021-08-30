import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)//把store绑到Vue.prototype上

const store = new Vuex.Store({
  state: {
    count:0
  },
  mutations:{
increment(state, n: number){
  state.count += n
}
  }
})
store.commit('increment',10)
export default store
