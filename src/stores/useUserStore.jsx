import { create } from "zustand"

const useUserStore = create(set => ({
  userlog: false,
  logUser: user => set(() => ({ userlog: user })),
  logOutUser: () => set({ userlog: false }),
}))

export default useUserStore
