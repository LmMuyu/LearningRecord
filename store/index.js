import Vue from "vue"
import Vuex from "vuex"
import actions from "./action.js"
import mutation from "./mutation"
import getters from "./getter.js"

Vue.use(Vuex)

const state = {
	
}

export default new Vuex.Store({
	state,
	getters,
	mutation,
	actions
})