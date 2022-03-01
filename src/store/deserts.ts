//import { fetchCartItems } from "~/api";

//export const FETCH_CART_ITEMS = "FETCH_CART_ITEMS";

const DEFAULT_DESERTS = [
  {
    name: "Frozen Yogurt",
    calories: 159,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
  },
  {
    name: "Eclair",
    calories: 262,
  },
  {
    name: "Cupcake",
    calories: 305,
  },
  {
    name: "Gingerbread",
    calories: 356,
  },
  {
    name: "Jelly bean",
    calories: 375,
  },
  {
    name: "Lollipop",
    calories: 392,
  },
  {
    name: "Honeycomb",
    calories: 408,
  },
  {
    name: "Donut",
    calories: 452,
  },
  {
    name: "KitKat",
    calories: 518,
  },
];

const state = () => ({
  items: DEFAULT_DESERTS,
});

const mutations = {
  addDesertItem(state: any, item: object[]) {
    state.items.push(item);
  },
  setDesertItems(state: any, cartItems: object[]) {
    state.items = cartItems;
  },
};

const actions = {
  //async [FETCH_CART_ITEMS]({ commit: any }) {
  // const { data } = await fetchCartItems();
  // commit("setCartItems", data);
  //},
  // async nuxtServerInit(storeContext, nuxtContext) {
  //     await storeContext.dispatch(FETCH_CART_ITEMS)
  // }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
