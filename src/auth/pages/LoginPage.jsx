import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import reactLogo from '/assets/react.svg';
import { useForm } from '../../heroes/hooks/';
import { AuthContext } from '../context/';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { emailText, passwordText, onInputChange } = useForm({
    emailText: '', 
    passwordText: ''
  });
  
  const onLogin = (event) => {
    event.preventDefault();
    const lastPath = localStorage.getItem('lastPath') || '/';
    login( emailText, passwordText );
    navigate(lastPath, {
      replace: true
    });
  }
  return (
    <div
      className='container mt-5 col-6'
    >
      <div className='card card-dark'>
        <div className="card-body">
          <div className='row rows-cols-2 row-cols-md-2 g-2 d-flex justify-content-md-center align-items-center'>
            <img 
              src={reactLogo} 
              className="logo-react login-react" 
              alt="React logo"
            /> 
            <h1 style={{width: 'auto'}}>Login</h1>
          </div> 
          <form onSubmit={onLogin}>
            <div className="form-floating mb-3">
              <input
                type='email'
                className='form-control'
                placeholder='Email address'
                name='emailText'
                autoComplete='off'
                value={emailText}
                onChange={onInputChange}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input 
                type='password'
                className='form-control'
                placeholder='Password'
                name='passwordText'
                autoComplete='off' 
                value={passwordText}
                onChange={onInputChange}
              /> 
              <label htmlFor="floatingInput">Password</label>
            </div>
            
            <div className='mt-1'>
              <button
                className='btn btn-primary col-12' 
              >
                Login
              </button>
            </div> 
          </form> 
        </div> 
      </div>
    </div>
  )
}
