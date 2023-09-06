import { defineStore } from 'pinia';
import axiosClient from "../config/axiosClient"
export const useMyMealStore = defineStore({
  id: 'myMealStore',
  state: () => ({
    searchedMeals: [],
    mealByLetter: [],
    mealByCategs: [],
    meal: {},
    letter: ''
  }),
  actions: {
    async searchMealByLetter() {
      await axiosClient.get(`/search.php?f=${this.$state.letter}`)
        .then(({ data }) => {
          this.$state.mealByLetter = data.meals
        })
    },
    searchMeal(keyword: string) {
      axiosClient.get(`/search.php?s=${keyword}`)
        .then(({ data }) => {
          // commit("setSearchedMeals", data.meals)
          this.$state.searchedMeals = data.meals
        })
    },
    getDetailOfMeal(id: string) {
      axiosClient.get(`/lookup.php?i=${id}`)
        .then(({ data }) => {
          // commit("setSearchedMeals", data.meals)
          this.$state.meal = data.meals[0]
        })
    },
    getMealByCategory(cat: string) {
      axiosClient.get(`/filter.php?c=${cat}`)
        .then(({ data }) => {
          this.$state.mealByCategs = data.meals
        })
    }
  },
  getters: {
    getMealByLetter(state) {
      return state.mealByLetter
    },
    getSearchedMeal(state) {
      return state.searchedMeals
    },
    getDetailMeal(state) {
      return state.meal
    },
    getMealByCat(state) {
      return state.mealByCategs
    }
  }
});
