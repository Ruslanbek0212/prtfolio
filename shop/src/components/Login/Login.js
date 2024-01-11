import React from 'react'
import './login.css'

function Login() {
  return (
    <div >
        <div className="register">
        <form action="">
            <h1>input login</h1>
            
            <input type="text" placeholder='login' />
            <input type="password" placeholder='password' />
            <button>login</button>
            <button>Create an account</button>
        </form>
        </div>
    </div>
  )
}

export default Login