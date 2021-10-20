import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
  const { error, handleNameChange,handleFormcontrol, signInUsingGoogle ,handlePasswordChange, handleEmailChange } = useAuth();
  const location = useLocation()
  const redirect_url = location.state?.fron?.pathname || '/home'
  const history = useHistory


  // Handle Google Sign In_________________
  const HandleGoogleSignIn = () => {
      signInUsingGoogle()
          .then(result => {
              console.log(error);
              history.push(redirect_url);
          })
          .catch(error => console.log(error));
  }
      return (
        <div>
            <form  onSubmit={handleFormcontrol} className="row g-3">
                <h3 className="text-center pt-5">Please Register</h3>
                <span>{error}</span>
                <div className="col-md-6">
    <label  htmlFor="inputEmail4" className="form-label">Name</label>
    <input onBlur={handleNameChange} type="text" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label  htmlFor="inputEmail4" className="form-label">Email</label>
    <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword6"/>
  </div>
  
  <div className="col-12">
    <button type="submit" className="btn btn-success">Register</button>
  </div>
</form>
<p className='text-center'>Already Registered? <Link to='/login'>log in</Link></p>
<div className='text-center pb-5'>
    <h4>--------or-------</h4>
<button onClick={HandleGoogleSignIn}  className='btn btn-success'>Google sign in</button>
</div>
        </div>
    );
};

export default Register;