import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import styles from '@/styles/components/ProductCard.module.css'

export default function ProductCard({name ,description}) {
    return (
        <Card className={styles.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image="/view-water-with-plastic-bottle.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
