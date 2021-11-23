import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import {useHistory, useLocation} from "react-router-dom";  
import useAuth from '../../hooks/useAuth';

    const Login = () => {   
    const {singInUsingGoogle} = useAuth();
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
      })

    const [loginUser, setLoginUser] = useState();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  
        const auth = getAuth();

        const handleSignIn = () => {
          singInUsingGoogle()
          history.replace(from);  
        }
  
        const handleSubmit = e => {
          e.preventDefault();
          loginWithEmailPass(userDetails.email, userDetails.password)
      }
  
        const handleChange = e => {
        setUserDetails({ ...userDetails, [e.target.name] : e.target.value });
      }
  
      const loginWithEmailPass = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
        const user = userCredential.user;
        setLoginUser(user);
        history.replace(from);
        })
        
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        });
    }

    return (
        <div id="login" className="d-flex justify-content-center align-items-center fw-bold">
            <div>
              <h2 className="mt-2">Please Register</h2>
              {loginUser?.email && <h3>Wellcome to {loginUser.email}</h3>}
            <form onSubmit={handleSubmit}>
               <div>
                  <div >
                     <label htmlFor="inline-email">Email</label>
                  </div>
                  <div className="mt-2">
                     <input name="email" value={userDetails.email} onChange={handleChange}  id="inline-email" type="email" placeholder="Enter your email"  className="rounded-3 mb-2"/>
                  </div>
                </div>
                <div >
                <div>
                    <label htmlFor="inline-password">Password</label>
                  </div>
                  <div>
                     <input name="password" value={userDetails.password} onChange={handleChange} id="inline-email" type="password" placeholder="Enter your password" className="rounded-3 mt-2"/>
                  </div>
               </div>
               <div>
               <button
                className="btn btn-primary mt-3 mb-2 border border-danger"
                type="submit" >Submit</button>
               <br/>
            </div>
            </form>
            <br/>
        -------------OR------------
            <br />
            <br />
            <h2>Please Log In</h2>
            <button onClick={handleSignIn} className="btn btn-danger mb-5 text-light fw-bold border border-primary mt-2">Google Sing In</button> 
        </div>
        </div>      
    );
};


export default Login;
