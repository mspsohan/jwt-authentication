import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify"

const Login = () => {
   const [values, setValues] = useState({
      email: "",
      password: ""
   })
   const handleSubmit = (e) => {
      e.preventDefault()
   }

   return (
      <div className="container">
         <h2>Register Account</h2>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="email">Email</label>
               <input type="email" name="email" id="" placeholder="Email" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
            </div>
            <div>
               <label htmlFor="password">Password</label>
               <input type="password" name="password" id="" placeholder="Password" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
            </div>
            <button type="submit">Login</button>
            <span>Already Have an Account? <Link to="/register">Register</Link></span>
         </form>
         <ToastContainer></ToastContainer>
      </div>
   );
};

export default Login;