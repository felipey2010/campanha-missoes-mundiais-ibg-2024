import { useState } from 'react'
import DrawerButton from './components/DrawerButton'
import DrawerContent from './components/DrawerContent'

function Drawer() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  return (
    <>
      <div className='h-full relative'>
        <DrawerButton handleClick={handleClick} />
      </div>

      <DrawerContent open={open} handleClick={handleClick} />
    </>
  )
}

export default Drawer
