import Vue from 'vue'
import Vuex from 'vuex'

import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
  })

  return Store
}
