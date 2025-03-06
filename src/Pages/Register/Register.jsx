import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';



export default function Register() {
  const[ errorMsg , setErrorMsg ]= useState(null);
  const[ isLoading , setIsLoading ]= useState(false);
  const navigate = useNavigate();

const initialValues ={
  name:'',
  email:'',
  password:'',
  rePassword:'',
  phone:'',
}
async function handleRegister(data) {
  setIsLoading(true)
  await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup' , data)
   .then((response)=>{
  
    setErrorMsg(null);
    setIsLoading(false);
    navigate('/Login');
    
}).catch((error)=>{setErrorMsg(error.response.data.message)
  setIsLoading(false)
})  
};

    
 
 const validationSchema = Yup.object({
  // name:Yup.string().required().max(20).min(2),
  // email:Yup.string().required(),
  // password:Yup.string().required().matches('/^[A-Za-z1-9]{8,12}$/','Password is Not Valid'),
  // password:Yup.string().required(),
  // rePassword:Yup.string().required().oneOf([Yup.ref('password')],"rePassword Does Not Match Password"),
  // phone:Yup.string().required().matches('/^01[0125][0-9]{8}$/','Phone is Not Valid'),
    // phone:Yup.string().required(),

   name:Yup.string().required().max(20).min(2),
    email:Yup.string().required(),
    password:Yup.string().required().matches(/^[A-Za-z1-9]{8,12}$/,"password is Not valid"),
    rePassword:Yup.string().required().oneOf([Yup.ref('password')],"rePassword Does Not Match Password"),
      phone:Yup.string().required().matches(/^01[0125][0-9]{8}$/,"phone is Not valid")

 });

const formik = useFormik({
  initialValues,
  validationSchema,
  onSubmit:handleRegister,
});



  return (
  <>
<section className="w-1/2 mx-auto bg-gray-50 shadow p-3 dark:bg-gray-900 my-3">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Register Now
        </h1>
        {
         errorMsg && <div className="bg-red-300 p-3 rounded-md my-2">{errorMsg}</div>
        }
        <form className="  space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}  >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name:</label>
            <input
            onChange={formik.handleChange}
            value={formik.values.name}
             type="text" 
             name="name"
              id="name" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
              placeholder="Enter Your Name" 
              onBlur={formik.handleBlur}
              />
          </div>
          {formik.touched.name && formik.errors.name &&(
          <small className="w-full pl-2 pr-60 py-2 text-red-500  bg-red-300 border rounded-md border-red-500 ">{formik.errors.name}</small>
          )}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email:</label>
            <input 
             value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="name@company.com" />
          </div>
          {formik.touched.email  && formik.errors.email&&(
          <small className="w-full pl-2 pr-60 py-2 text-red-500  bg-red-300 border rounded-md border-red-500 ">{formik.errors.email}</small>
          )}
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password:</label>
            <input 
             value={formik.values.password}
             onBlur={formik.handleBlur}
              onChange={formik.handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  />
          </div>
          {formik.errors.password&&formik.touched.password && (
          <small className="w-full pl-2 pr-52 py-2 text-red-500  bg-red-300 border rounded-md border-red-500 ">{formik.errors.password }</small>
          )}
          <div>
            <label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">rePassword:</label>
            <input 
              onChange={formik.handleChange}
              value={formik.values.rePassword}
              onBlur={formik.handleBlur}
            type="password" name="rePassword" id="rePassword" placeholder="Enter Your rePassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  />
          </div>
          {formik.touched.rePassword && formik.errors.rePassword &&(
          <small className="w-full pl-2 pr-48 py-2 text-red-500  bg-red-300 border rounded-md border-red-500">{formik.errors.rePassword }</small>
          )}
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">phone</label>
            <input
             value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            type="tel" name="phone" id="phone" placeholder="01020454085" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  />
          </div>
          {formik.touched.phone && formik.errors.phone &&(
          <small className="w-full pl-2 pr-52  py-2  text-red-500  bg-red-300 border rounded-md border-red-500">{formik.errors.phone }</small>
          )}
    {isLoading? (
       <button disabled
       className="text-white disabled:bg-green-200 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Loading...
      </button>
    ):
      <button disabled={!formik.isValid}
      type="submit" className="text-white  disabled:bg-green-300 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
        Register
      </button>} 
          <small className="font-serif">Already have account!<Link className="mx-2" to={'/Login'}>Login</Link></small>
        </form>
      </div>
    </div>
  </div>
</section>

  
  
  
  </>  
  )
}
