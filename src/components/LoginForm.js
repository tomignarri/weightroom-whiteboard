import { useState } from "react"

export default function LoginForm() {
    return (
      <div>
        <h1>Login</h1>
        <label>Enter Code</label>
        <input type="text" />
        
        <label>Submit</label>
        <input type="submit" />
        
      </div>
    )
  }