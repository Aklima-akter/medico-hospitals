import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { singInUsingGoogle, handleEmailChange, handlePasswordChange, handleFormcontrol,createUser } = useAuth();
    return (
        <div>
            <form  onSubmit={handleFormcontrol} className="row g-3">
                <h3 className="text-center pt-5">Please Register</h3>
  <div className="col-md-6">
    <label  htmlFor="inputEmail4" className="form-label">Email</label>
    <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword6"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Re-enter password</label>
    <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword5"/>
  </div>
  
  
  <div className="col-12">
    <button onClick={createUser} type="submit" className="btn btn-success">Register</button>
  </div>
</form>
<p className='text-center'>Already Registered? <Link to='/login'>log in</Link></p>
<div className='text-center pb-5'>
    <h4>--------or-------</h4>
<button onClick={singInUsingGoogle}  className='btn btn-success'>Google sign in</button>
</div>
        </div>
    );
};

export default Register;