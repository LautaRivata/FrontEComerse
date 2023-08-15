import React from "react"
import { Link } from "react-router-dom"
import { Button } from "antd"

const ErrorPage = () => {
  return (
    <>
      <h1>Error Page</h1>
      <Link to="/">
        <Button type="primary">Ir al home.</Button>
      </Link>
    </>
  )
}

export default ErrorPage
