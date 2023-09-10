import { create } from "zustand"

const useUserStore = create(set => ({
  userSecion: { username: null, usergerarquia: 1, userlog: false, userID: 0 },
  logUser: user => set(() => ({ userSecion: user })),
  logOutUser: () =>
    set({
      userSecion: {
        username: null,
        usergerarquia: 1,
        userlog: false,
        userID: 0,
      },
    }),
}))

export default useUserStore
