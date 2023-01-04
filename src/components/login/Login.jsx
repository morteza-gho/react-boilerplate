import { IsLogin, LoginUser } from "../../services/AuthService"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";

const Login = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (IsLogin()) {
      navigate('/dashboard')
    }
  })

  const login = async () => {
    const userData = {
      name: 'Morteza',
      family: 'QorbanAlizade',
      mobile: '09134307521'
    }
    await LoginUser(userData, 'morteza');
    navigate('/dashboard')
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <h1>Login</h1>
      <button className="btn btn-success" onClick={() => login()}>Login To Panel</button>
    </div>
  )
}

export default Login