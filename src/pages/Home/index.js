import React, { useState, useEffect } from 'react'

import { MyService } from 'services'

const Home = () => {
  const [employee, setEmployees] = useState({})

  useEffect(() => {
    let subscribeEmployee = true

    async function getEmployee () {
      const response = await MyService()
      if (subscribeEmployee) setEmployees(response)
    }

    getEmployee()

    return () => {
      subscribeEmployee = false
    }
  }, [])

  useEffect(() => {
    console.log(employee)
  }, [employee])

  return (
    <div>
      <h1>React Boilerplate v{process.env.REACT_APP_VERSION}</h1>
    </div>
  )
}

export default Home
