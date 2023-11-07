import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../../libs/axios'
import './styleLogin.css'


export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function onSubmit() {
    console.log("CLICK")
    try {
      const payload = {
        user: username,
        password: password
      }
      const res = await axios.post("/login", payload)
      const data = await res.data

      console.log(data)

      localStorage.setItem("token", data.token)

      switch (data.data.id_role) {
        case 1: //1 คือ ผู้ดูแลระบบ
          navigate("/admin")
          break;
        case 2: //2 คือ เจ้าหน้าที่
          navigate("/staff")
          break;
        case 10: //10 change password เฉพาะนักศึกษา
        default:
          break;
      }

    } catch (error) {
      console.error(error)
    }
  }
  return (
        <div className="login-box container-fluid h-custom">
      {/* /.login-logo */}
      <div className="card card-outline card-primary divider">
        <div className="card-header text-center">
          <a href="#" className="h1"><b>SPITECH</b></a>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Login</p>

            {username} || {password}
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">
                    Remember Me
                  </label>
                </div>
              </div>
              {/* /.col */}
              <div className="col-4">
                <button type="button" className="btn btn-primary btn-lg" style={{paddingLeft: '2.0rem', paddingRight: '2.0rem'}} onClick={onSubmit} >Sign In</button>
              </div>
              {/* /.col */}
            </div>

          <p className="mb-1">
            <a href="#">I forgot my password</a>
          </p>
          <p className="mb-0">
            <a href="#" className="text-center">Register a new membership</a>
          </p>
        </div>
        {/* /.card-body */}
      </div>
      {/* /.card */}
    </div>

  )
}
