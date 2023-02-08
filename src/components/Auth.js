import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import classes from './Auth.module.css';
import { authActions } from '../store/index';
import { useRef } from 'react';

const Auth = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated); 
  const dispatch = useDispatch(); 
  const emailRef = useRef(); 
  const passwordRef = useRef(); 

  const loginHandler = (event) => {
    event.preventDefault(); 
    const enteredEmail = emailRef.current.value; 
    const enteredPassword = passwordRef.current.value; 
    if (enteredEmail === '' || enteredPassword === ''){
      return alert('Please enter all input fields'); 
    }
    dispatch(authActions.login()); 
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordRef} />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
