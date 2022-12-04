import React, { Component } from 'react'
import { useState } from 'react'
import "../styles.css"
import axios from "axios"

function SignUp() {
	//const history = useHistory()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()
 
		const response = await fetch('http://localhost:5000/api/user/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			}, 
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		// if (data.status === 'ok') {
		// 	history.push('/login')
		// }
	}

	return (
		<div id="login-box">
  <div class="left">
    <h1>Sign up</h1>
    <form onSubmit={registerUser}>
    <input type="text" 
    name="username"
    onChange={(e) => setName(e.target.value)}
    placeholder="Username" />

    <input type="text"
     name="email"
    onChange={(e) => setEmail(e.target.value)}
    placeholder="E-mail" />




    <input type="password" name="password" 
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password" />

    <input type="password" name="password2" placeholder="Retype password" />
    <input type="submit" name="signup_submit" value="Register" />

</form>

  </div>
  
  <div class="right">
    <span class="loginwith">Sign in with<br />social network</span>
    
    <button class="social-signin facebook">Sign up with facebook</button>
    <button class="social-signin twitter">Sign up with Twitter</button>
    <button class="social-signin google">Sign up with Google+</button>
  </div>
  <div class="or">OR</div>
</div>
	)
}

export default SignUp