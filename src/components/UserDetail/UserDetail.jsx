import React from "react"
import { Input, Button } from "antd"
import { useState } from "react"
import { useGetFetch } from "../../hooks"
import { useUserStore, useSendStore } from "../../stores"

const UserDetail = () => {
  const { userID } = useUserStore(state => state.userSecion)
  const { data, isLoading, isError } = useGetFetch(`/api/users/${userID}`)
  //  const actions = useSendStore(state => state.actions)
  const [editName, setEditName] = useState("")
  const [editAddress, setEditAddress] = useState("")
  const [editEmail, setEditEmail] = useState("")
  const [editTelephone, setEditTelephone] = useState("")

  return (
    <>
      {isError ? (
        <div>
          <h2>
            No pudimos Obtener datos de Usuario, Por Favor Vuelve a Logearte
          </h2>
        </div>
      ) : (
        <div>
          {isLoading ? (
            <div>
              <span>Cargando Datos de Usuario</span>
            </div>
          ) : (
            <div>
              <label htmlFor="name">Usuario:</label>
              <Input
                type="text"
                id="name"
                value={data.name}
                defaultValue={data.name}
                onChange={e => setEditName(e.target.value)}
              />
              <label htmlFor="address">Direccion:</label>
              <Input
                type="text"
                id="address"
                value={data.address}
                onChange={e => setEditAddress(e.target.value)}
              />
              <label htmlFor="email">Email:</label>
              <Input
                type="text"
                id="email"
                value={data.email}
                onChange={e => setEditEmail(e.target.value)}
              />
              <label htmlFor="telephone">Telefono:</label>
              <Input
                type="text"
                id="telephone"
                value={data.telephone}
                onChange={e => setEditTelephone(e.target.value)}
              />
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default UserDetail
