import { userLogin } from "../http";
import { useRef,useState} from "react";
import { useAuth } from "../Context/authContext";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";


const Login=()=>{

    const formRef=useRef();
    const {setIsLoggedIn}=useAuth();
    const navigate = useNavigate();
    const [error,setError]=useState('');

    const handleLoginSubmit=async(event)=>{
        event.preventDefault();
        const formData=new FormData(event.target);
        const formObject=Object.fromEntries(formData.entries());
        const response=await userLogin(formObject);
        if(response.message=='success'){
            formRef.current.reset();
            setIsLoggedIn(true);
            navigate('/');
        }else{
            setError(response.message);
        }
    }
    return(
        <div className="login-container">
            <div className="login-card">
                <h3 className="login-title">Login</h3>
                <form onSubmit={handleLoginSubmit} ref={formRef}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="Enter email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="form-control" id="password" placeholder="Password" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <p className="error-message">{error}</p>
                <div className="sign-up">
                        <h5>Not a user ?</h5>
                        <NavLink to="../signup" className="link">SignUp</NavLink>
                    </div>
            </div>
        </div>
    )
}

export default Login;