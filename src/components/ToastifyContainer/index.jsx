import { Slide, ToastContainer } from 'react-toastify'

export default function ToastifyContainer() {
  return (
    <ToastContainer
      position='top-center'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      transition={Slide}
      theme='light'
      limit={3}
      closeButton
    />
  )
}
