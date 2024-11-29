import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import styles from '@/styles/components/BuyButtonCard.module.css'
import { useState } from 'react'



export default function BuyButtonCard() {
    const [totalPrice , setTotalPrice] = useState(0)
    

    return (
        <Card className={styles.cardStyle} variant="outlined">
            <CardContent>
                <p className={styles.totalPrice}>
                    小計 <br /> ¥{totalPrice}
                </p>
            </CardContent>
            <CardActions>
                <Button variant="contained">レジに進む</Button>
            </CardActions>
        </Card>
    )
}
