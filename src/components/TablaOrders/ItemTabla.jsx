import React from "react"

const ItemTabla = () => {
  const { data, isLoading, isError } = useGetFetch(`/api/orders`)
  return (
    <div>
      {isLoading ? (
        <div></div>
      ) : (
        <div>Cargando Datos, Por Favor Espere un Momento</div>
      )}
    </div>
  )
}

export default ItemTabla
