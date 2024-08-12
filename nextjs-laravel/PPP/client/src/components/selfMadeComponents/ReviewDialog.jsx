'use client'

import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Button, Rating } from '@mui/material'

const ReviewDialog = () => {
    const [value, setValue] = useState(2)
    const [open, setOpen] = useState(true)
    const handleClose = () => {
        setOpen(false)
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    return (
        <>
            <Button
                disableElevation
                variant="contained"
                onClick={handleClickOpen}>
                レビューする
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogContent>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue)
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>戻る</Button>
                    <Button onClick={handleClose} autoFocus>
                        送信
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ReviewDialog
