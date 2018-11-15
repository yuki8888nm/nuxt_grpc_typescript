import { State, ActionPayloads, MutationPayloads, GetterResults, Mutations, Actions, Getters } from '../index.d'

export const state: () => State = (): State => ({
  hoge: '',
  fuga: 0,
});

export const mutations: Mutations<State, MutationPayloads> = {
  changeHoge(state, payload) {
    state.hoge = payload.value;
  },
  changeFuga(state, payload) {
    state.fuga = payload.value;
  },
  incrementFuga(state) {
    state.fuga++;
  }
};

export const actions: Actions<State, MutationPayloads, ActionPayloads, GetterResults> = {
  mdSave({ commit }, payload) {
    commit('changeHoge', { value: payload.hoge });
    commit('changeFuga', { value: payload.fuga });
  },
  mdSaveRoot({ commit }, payload) {
    commit('changeRootHoge', { value: payload.hoge }, { root: true });
    commit('changeRootFuga', { value: payload.fuga }, { root: true });
  }
};

export const getters: Getters<State, GetterResults> = {
  doubleFuga(state) {
    return state.fuga * 2;
  },
};
