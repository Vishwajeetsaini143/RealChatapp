import React from 'react'
import { useState } from 'react'

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'

const Otp = () => {
  const [state,setState]=useState()
  const handleChange=(e)=>{
    const {name,value}=e.target
    setState({
      [name]:value
    })
    

  }
  const configureCaptcha=()=>{
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }, defaultCountry:"IN"
    }, auth);
    
    
  }
  // const configureCaptcha=()=>{
  //   window.recaptchaVerifier= new  RecaptchaVerifier("sign-in-button",{
  //     "size":"invisible",
  //     "callback":(response)=>{
  //       onSignInSubmit();
  //     },
  //     defaultCountry:"IN"
  //   });
  // }
  const onSignInSubmit=(e)=>{
    e.preventDefault()
    configureCaptcha();
    const phoneNumber = "+91"+ state.mobile;
    console.log(phoneNumber)
  
const appVerifier = window.recaptchaVerifier;

const auth = getAuth();
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log("otp has been sand")
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      console.log("sms not sent")
      // ...
    });

  }
   const onSubmitOTP=(e)=>{
    e.preventDefault()
    const code = state.otp;
    console.log("code",code)
 window.confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  console.log(JSON.stringify(user))
  alert("user is verified")
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});

  }
 
  return (
    <div>
    
      <h1>Login form</h1>
      <form onSubmit={onSignInSubmit}>
      <div id='sign-in-button'></div>
        <input type="number" name="mobile" placeholder="Mobile number" required onChange={handleChange}/>
        <button type='submit' >Submit</button>
      </form>
      <h1>Enter otp</h1>
      <form onSubmit={onSubmitOTP}>
        <input type="number" name="otp" placeholder="Enter otp" required onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>
       
    </div>
  )
}

export default Otp