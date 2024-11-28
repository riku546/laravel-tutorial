import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import styles from '@/styles/components/BuyButtonCard.module.css'

const card = (
    <>
        <CardContent>
            <p className={styles.totalPrice}>
                小計 <br /> ¥3000
            </p>
        </CardContent>
        <CardActions>
            <Button variant="contained">レジに進む</Button>
        </CardActions>
    </>
)

export default function BuyButtonCard() {
    return (
        <Card className={styles.cardStyle} variant="outlined">
            {card}
        </Card>
    )
}
