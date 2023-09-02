import React from "react"
import { Button, Checkbox, Form, Input } from "antd"
const onFinish = values => {
  console.log("Success:", values)
}
const onFinishFailed = errorInfo => {
  console.log("Failed:", errorInfo)
}

const LogInPage = () => {
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
          onFinish={onFinish}
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
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => {
                console.log("click")
              }}
            >
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
