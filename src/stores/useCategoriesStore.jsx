import { create } from "zustand"

const useCategoriesStore = create(set => ({
  categories: [],
  addCategories: cat => set({ categories: cat }),
}))

export default useCategoriesStore
