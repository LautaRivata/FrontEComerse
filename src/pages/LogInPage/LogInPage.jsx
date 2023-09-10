import React from "react"
import { Header, Footer } from "../../components"
import { Button, Form, Input } from "antd"
import { notification } from "antd"
import { CheckOutlined, ExclamationOutlined } from "@ant-design/icons"
import { checkLogin } from "../../utils"
import { useUserStore } from "../../stores"
import { useNavigate } from "react-router-dom"
import "./styles.css"

const openLogFailNotification = title =>
  notification.open({
    message: `¡Usuario o Contrasena Incorrectos!`,
    description: title,
    placement: "topLeft",
    icon: <ExclamationOutlined style={{ color: "#108ee9" }} />,
  })

const openLogCorrectNotification = title =>
  notification.open({
    message: `¡Usuario Logeado Correctamente!`,
    description: title,
    placement: "topLeft",
    icon: <CheckOutlined style={{ color: "green" }} />,
  })

const onFinishFailed = errorInfo => {
  console.log("Failed:", errorInfo)
}

const LogInPage = () => {
  const logUser = useUserStore(state => state.logUser)
  const navigate = useNavigate()
  const onFinish = values => {
    checkLogin(values).then(data => {
      if (data.log === true) {
        openLogCorrectNotification(data.user)
        logUser({
          userID: data.userID,
          username: data.username,
          usergerarquia: data.usergerarquia,
          userlog: data.log,
        })
        navigate(`/`)
      } else {
        openLogFailNotification(data.user)
      }
    })
  }
  return (
    <div className="contenedor">
      <Header />
      <br />
      <h3>Iniciar Secion</h3>
      <section className="main">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={values => onFinish(values)}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </section>
      <Footer />
    </div>
  )
}

export default LogInPage
