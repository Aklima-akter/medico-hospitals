import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const LogIn = () => {
    const { singInUsingGoogle} = useAuth();
    
    const handleSubmit =(e) =>{
        e.preventDefault();
    }

    const handleEmailChange =(e) =>{
        console.log(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="row g-3">
                <h3 className="text-center pt-5">Please Log in</h3>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input onBlur={handleEmailChange}  type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
<p className='text-center'>new to Medico? <Link to='register'>Create Account</Link></p>
<div className='text-center pb-5'>
    <h4>--------or-------</h4>
<button onClick={singInUsingGoogle} className='btn btn-success'>Google sign in</button>
</div>
        </div>
    );
};

export default LogIn;