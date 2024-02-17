import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import axios from 'axios'

const Register = () => {
   const [values, setValues] = useState({
      email: "",
      password: ""
   })
   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
         const { data } = await axios.post('http://localhost:5000/register', {
            ...values
         })
      } catch (error) {
         console.log(error)
      }
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
            <button type="submit">Register</button>
            <span>Already Have an Account? <Link to="/login">Login</Link></span>
         </form>
         <ToastContainer></ToastContainer>
      </div>
   );
};

export default Register;