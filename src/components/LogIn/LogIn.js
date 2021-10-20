import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const LogIn = () => {
  const [handleFormcontrol,handleEmailChange, handlePasswordChange] = useState('')
  const { signInUsingGoogle, error } = useAuth();
  const location = useLocation()

  
  const redirect_url = location.state?.fron?.pathname || '/home'
  const history = useHistory()


  // Handle Google Sign In_________________
  const HandleGoogleSignIn = () => {
      signInUsingGoogle()
          .then(result => {
              history.push(redirect_url);
          })
          .catch(error => console.log(error));
        }
  return (

    <div>
       <form onSubmit={handleFormcontrol} className="row g-3">
              <span>{error}</span>
                <h3 className="text-center pt-5">Please Log in</h3>
         <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
           <input onblur={handleEmailChange}  type="email" className="form-control" id="inputEmail4"/>
         </div>
          <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">Password</label>
        <input onblur={handlePasswordChange} type="password" className="form-control" id="inputPassword4"/>
  </div>
  
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Sign in</button>
       </div>
    </form>
       <p className='text-center'>new to Medico? <Link to='register'>Create Account</Link></p>
         <div className='text-center pb-5'>
         <h4>--------or-------</h4>
        <button onClick={HandleGoogleSignIn} className='btn btn-success'>Google sign in</button>
  </div> 
    </div>
  );
};

export default LogIn;





