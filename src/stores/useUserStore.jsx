import { create } from "zustand"

const useUserStore = create(set => ({
  userSecion: { username: null, usergerarquia: 1, userlog: false },
  logUser: user => set(() => ({ userSecion: user })),
  logOutUser: () =>
    set({ userSecion: { username: null, usergerarquia: 1, userlog: false } }),
}))

export default useUserStore
