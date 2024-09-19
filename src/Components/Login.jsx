import { userLogin } from "../http";
import { useRef } from "react";
const Login=()=>{

    const formRef=useRef();

    const handleLoginSubmit=async(event)=>{
        event.preventDefault();
        const formData=new FormData(event.target);
        const formObject=Object.fromEntries(formData.entries());
        const response=await userLogin(formObject);
        console.log(response);
        if(response){
            formRef.current.reset();
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
                    <div className="forgot-password">
                        <a href="#">Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;