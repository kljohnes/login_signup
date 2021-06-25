import { useState } from 'react';
function Signup ({username, password, setPassword, setUsername, toggle, submitForm}){
    const [confirmPassword, setConfirmPassword] = useState()
    const [failMessage, setFailMessage] = useState("")
    const confirmAndSend = () => {
      if (password == confirmPassword){
        submitForm()
    } else {
      setFailMessage("The passwords don't match")
      setTimeout(() => {setFailMessage("") }, 4000)
    }
  }
    return(
        <form>
        <h1>Signup</h1>
        <label>Username: </label>
        <input placeholder={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
        <br />
        <label>Password: </label>
        <input type="password" onChange={(e) => { setPassword(e.target.value)}}></input>
        <br />
        <p>{failMessage}</p>
        <label>Confirm: </label>
        <input type="password" onChange={(e)=>{setConfirmPassword(e.target.value)}}></input>
        <br />
        <a onClick = {toggle}>Already have an account?</a>
      <button type="button" onClick={confirmAndSend}>Sign Up</button>
      </form>
    )
}

export default Signup;