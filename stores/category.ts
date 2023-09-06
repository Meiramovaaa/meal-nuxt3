import { defineStore } from 'pinia';
import axiosClient from "../config/axiosClient"
export const useMyCategoryStore = defineStore({
  id: 'myCategoryStore',
  state: () => ({
    allCategs: [],
  }),
  actions: {
    getAllCategs() {
      axiosClient.get(`/categories.php`)
        .then(({ data }) => {
          this.$state.allCategs = data.categories
        })
    }
  },
  getters: {
    getAllCategories(state) {
      return state.allCategs
    }
  }
});
