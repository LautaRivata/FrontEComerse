"use strict"

const checkLogin = async function (values) {
  const response = await fetch("http://localhost:8080/api/users/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: values.username,
      userpass: values.password,
    }),
  })
  return response.json()
}

export default checkLogin
