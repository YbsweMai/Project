import Vue from "vue";
import Vuex from "vuex";

import * as types from "./mutation-type";

Vue.use(Vuex);

const user = {
  state: {
    list: JSON.parse(localStorage.getItem("userid")) || {}
  },
  mutations: {
    /* 存储个人信息 */
    [types.add_User](state, data) {
      state.list = data;
    },

    /* 兑换商品  */
    // [types.Exchange_Record] (state,value) {
    //   state.list.integration = state.list.integration - value.price
    // },

    /* 更新积分 */
    [types.Update_point](state, data) {
      state.list = data;
      console.log(state.list);
    }
  },
  actions: {
    addUser({ commit }, data) {
      console.log("////", data);
      localStorage.setItem("userid", JSON.stringify(data));
      console.log(data._id);
      commit(types.add_User, data);
    },

    // exchangeRecord({ commit },value){
    //   commit(types.Exchange_Record,value)
    // },

    /* 接收传入的最新个人信息后覆盖旧信息 */
    updatePoint({ commit }, value) {
      console.log(value);
      localStorage.setItem("userid", JSON.stringify(value));
      commit(types.Update_point, value);
    }
  },
  modules: {}
};

export default user;
