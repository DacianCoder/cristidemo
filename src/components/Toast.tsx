import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

/**
 * Atom component that renders a toast
 *
 * @constructor
 */
/* todo */
// toastClassName="toastContainer"
// progressClassName="toastProgress"
const Toast = () => (
  <ToastContainer
    position="top-right"
    autoClose={8000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    rtl={false}
    draggable
    pauseOnHover
  />
)

export default Toast
