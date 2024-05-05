// import { createStore } from 'vuex';
import { createStore } from "vuex";

export default createStore({
  state: {
    cartItems: {} // Ensure it's an object
  },
  mutations: {
    addToCart(state, itemId) {
      console.log('Adding item:', itemId); // Log for debugging
      if (itemId in state.cartItems) {
        state.cartItems[itemId]++;
      } else {
        state.cartItems[itemId] = 1;
      }
      console.log('Updated cartItems:', state.cartItems); // Log for debugging
    },
    removeFromCart(state, itemId) {
      // ... your existing logic
    },
  },
  actions: {
    addToCart({ commit }, itemId) {
      commit('addToCart', itemId);
    },
    removeFromCart({ commit }, itemId) {
      commit('removeFromCart', itemId);
    },
  },
  getters: {
    getCartItems: (state) => state.cartItems
  }
});
