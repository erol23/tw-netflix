import { Outlet, Navigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const PrivateRouter = () => {
    const {user} = UserAuth()
    console.log(user)
  return (
    user ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRouter