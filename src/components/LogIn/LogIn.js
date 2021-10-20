import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const LogIn = () => {
    const { singInUsingGoogle, handleEmailChange, handlePasswordChange, handleFormcontrol, signInUser,setIsLoading } = useAuth();
    const location =useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.fron?.pathname || '/home';
    console.log(location.state?.fron?.pathname , "came from");
    console.log(location);

    const handleGoogleLogIn = () =>{
      singInUsingGoogle()
      .then(result =>{
        history.push(redirect_uri);
      })
      .finally(() =>setIsLoading(false))
    }
    return (
        <div>
            <form onSubmit={handleFormcontrol} className="row g-3">
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
    <button onClick={signInUser} type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
<p className='text-center'>new to Medico? <Link to='register'>Create Account</Link></p>
<div className='text-center pb-5'>
    <h4>--------or-------</h4>
<button onClick={handleGoogleLogIn} className='btn btn-success'>Google sign in</button>
</div>
        </div>
    );
};

export default LogIn;