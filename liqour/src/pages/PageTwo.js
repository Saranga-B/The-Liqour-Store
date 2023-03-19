import React from 'react'


export default function PageTwo() { 
    function onClick(){
        alert("you clicked me");
    }
  return (
    <><><><div className='SignInBox'>
          <svg width="100%" height="100%">
              <rect x="10" y="10" /></svg>
          <h1>You need to log in or create a new account to explore more </h1>

      </div>
          <div className="text-container">
              <span className="text1">New to Here</span>
              <span className="text2">Already Registered?</span>


          </div></><div className='But'>
              <button onClick={onClick}>Create an Account</button>
          </div></><div className='But2'>
          <button onClick={onClick}>Log in</button>
          </div></>
    
          
  )
}
