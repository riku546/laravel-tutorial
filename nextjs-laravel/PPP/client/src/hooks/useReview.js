import axios from '@/lib/axios'
import React, { useState } from 'react'

const useReview = () => {
    const [value, setValue] = useState(5)
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const sendReview = async problemId => {
        handleClose()

        const requestBody = {
            problemId: problemId,
            numStar: value,
        }
        console.log(requestBody)

        try {
            await axios.post('api/review', requestBody)
            console.log('success')
        } catch (error) {
            console.log(error)
        }
    }

    return {
        value,
        setValue,
        open,
        handleClickOpen,
        handleClose,
        sendReview,
    }
}

export default useReview
