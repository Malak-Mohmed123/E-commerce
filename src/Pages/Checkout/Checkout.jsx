import { useFormik } from 'formik';
import { useContext } from 'react';
import * as Yup from 'yup';
import { CartContext } from '../../Context/CartContext';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Checkout() {
    const {   setNumOfCartItems, onlinePayment } = useContext(CartContext);
    const navigate = useNavigate();
    const { state } = useLocation();

    const initialValues = {
        details: '',
        phone: '',
        city: '',
    };

    const validationSchema = Yup.object({
        details: Yup.string().required("Details are required"),
        phone: Yup.string().required("Phone is required"),
        city: Yup.string().required("City is required"),
    });

    async function handleSubmit(data) {
        if (state === "online") {
            let response = await onlinePayment({ shippingAddress: data });
            if (response.status === "success") {
                window.location.href = response.session.url;
            }
        } else {
            // let response = await CashOnDelivery({ shippingAddress: data });
            // if (response.status === "success") {
            //     setNumOfCartItems(0);
            //     setCartId(null);
            //     navigate("/allorders");
            // }
            setNumOfCartItems(0);
                // setCartId(null);
                navigate("/allorders");
        }
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit
    });

    return (
        <div className="w-1/2 mx-auto bg-gray-50 shadow p-3 dark:bg-gray-900 my-3">
            <h5 className="font-bold mb-4 text-xl">Checkout</h5>
            <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="details" className="block mb-2 font-serif text-md text-gray-900 dark:text-white">Details:</label>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.details}
                        type="text"
                        name="details"
                        id="details"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Your details"
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.details && formik.errors.details && (
                        <small className="text-red-600">{formik.errors.details}</small>
                    )}
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-2 font-serif text-md text-gray-900 dark:text-white">Phone:</label>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        onBlur={formik.handleBlur}
                        type="tel"
                        name="phone"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Your phone"
                    />
                    {formik.touched.phone && formik.errors.phone && (
                        <small className="text-red-600">{formik.errors.phone}</small>
                    )}
                </div>

                <div>
                    <label htmlFor="city" className="block mb-2 font-serif text-md text-gray-900 dark:text-white">City:</label>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        onBlur={formik.handleBlur}
                        type="text"
                        name="city"
                        id="city"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Your city"
                    />
                    {formik.touched.city && formik.errors.city && (
                        <small className="text-red-600">{formik.errors.city}</small>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full rounded-md m-2 p-2 bg-white border border-[#7FE3F7] text-[#7FE3F7]"
                >
                    Pay Now
                </button>
            </form>
        </div>
    );
}
