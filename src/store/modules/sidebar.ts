export interface StateSidebar {
  collapsed: boolean;
}

export default {
  namespaced: true,
  state: {
    collapsed: false,
  },
  mutations: {
    SET_COLLAPSED(state: StateSidebar, value: boolean): void {
      state.collapsed = value;
    },
  },
  actions: {
    setCollapsed(
      { commit }: { commit: (type: string, payload: boolean) => void },
      value: boolean
    ): void {
      commit("SET_COLLAPSED", value);
    },
  },
};
