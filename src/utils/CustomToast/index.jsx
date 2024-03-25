import { toast } from 'react-toastify'

export default function showToast(message, type) {
  const style = {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  }

  switch (type) {
    case 'info':
      toast.info(message, style)
      break
    case 'success':
      toast.success(message, style)
      break
    case 'warn':
      toast.warn(message, style)
      break
    case 'error':
      toast.error(message, style)
      break
    default:
      toast(message, style)
  }
}
