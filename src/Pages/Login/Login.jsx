import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { tokenContext} from "../../Context/TokenContext";



export default function Login() {
  // لو عوذا اظهر اي حاجه في ui => هنستخدم usestate
  const[ errorMsg , setErrorMsg ]= useState(null);
  const[ isLoading , setIsLoading ]= useState(false);
  const navigate = useNavigate();
  const {settoken} =useContext(tokenContext)
console.log(navigate);

const initialValues ={
  email:'',
  password:'',

}
async function handleLogin(data) {
  //call Api (axios)
  //https://ecommerce.routemisr.com/api/v1/auth/signup
  setIsLoading(true)
  console.log(data);
  await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin' , data)
   .then((response)=>{
    console.log(response);
    //set context
    settoken(response.data.token)
    //set localStorage
    localStorage.setItem('token',response.data.token)
    setErrorMsg(null);
    setIsLoading(false);
    
    
    // navigate('/');
    
}).catch((error)=>{setErrorMsg(error.response.data.message)
  setIsLoading(false)
})  
};


 
 const validationSchema = Yup.object({
  email:Yup.string().required(),
  // password:Yup.string().required().matches('/^[A-Za-z1-9]{8,12}$/','Password is Not Valid'),
  password:Yup.string().required(),

 });

const formik = useFormik({
  initialValues,
  validationSchema,
  onSubmit:handleLogin,
});
console.log(formik);



  return (
  <>
<section className="w-1/2 mx-auto bg-gray-50 shadow p-3 dark:bg-gray-900 my-3">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Login Now
        </h1>
        {
         errorMsg && <div className="bg-red-300 p-3 rounded-md my-2">{errorMsg}</div>
        }
        <form className="  space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}  >

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email:</label>
            <input 
             value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
          </div>
          {formik.touched.email  && formik.errors.email&&(
          <small className="text-red-600 ">{formik.errors.email}</small>
          )}
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password:</label>
            <input 
             value={formik.values.password}
             onBlur={formik.handleBlur}
              onChange={formik.handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
          </div>
          {formik.errors.password&&formik.touched.password && (
          <small className="text-red-600 ">{formik.errors.password }</small>
          )}
    
  
    {isLoading? (
       <button disabled
       className="text-white disabled:bg-blue-200 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Loading...
      </button>
    ):
      <button disabled={!formik.isValid}
      type="submit" className="text-white  disabled:bg-blue-200 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Login
      </button>} 
          <small>Create New Account<Link to={'/Register'}>Register</Link></small>
        </form>
      </div>
    </div>
  </div>
</section>

  
  
  
  </>  
  )
}
