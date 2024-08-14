import React, { useState } from 'react'

const useReview = () => {
  const [value, setValue] = useState(2)
  const [open, setOpen] = useState(false)
  const handleClose = () => {
      setOpen(false)
  }

  const handleClickOpen = () => {
      setOpen(true)
  }

  return{
    value,
    setValue,
    open,
    handleClickOpen,
    handleClose
  }

}

export default useReview
