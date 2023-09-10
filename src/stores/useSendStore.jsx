import { create } from "zustand"

const useSendStore = create(set => ({
  send: { name: "", address: "", email: "", telephone: "" },
  editSend: user =>
    set({
      send: {
        name: user.name,
        address: user.address,
        email: user.email,
        telephone: user.telephone,
      },
    }),
}))

export default useSendStore
