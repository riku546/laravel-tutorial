import Header from '@/components/selfMade/Header'
import ReadStars from '@/components/selfMade/ReadStars'
import React from 'react'
import styles from '@/styles/pages/productPage.module.css'
import Button from '@mui/material/Button'

const page = () => {
    return (
        <div className="container">
            <Header />

            <main className={styles.mainArea}>
                <img
                    src="/view-water-with-plastic-bottle.jpg"
                    alt=""
                    className={styles.productImg}
                />
                <article className={styles.productInfos}>
                    <h4 className={styles.productName}>water</h4>
                    <p className={styles.description}>
                        硬度15の国内でも数少ない柔らかいお水となります。日本人に適していると言われる硬度15㎎/Lの軟水は、口当たりがまろやかで飲みやすい優しいお水。そのままでも、お料理やお酒の水割り、お茶やコーヒーなど様々な用途にお使いいただけます。
                    </p>
                    <div style={{display:"flex" , gap:"30px" , alignItems:"center"}}>
                        
                            <ReadStars />
                            <p className={styles.price}>¥ 100</p>
                        
                        <Button variant="contained">カートに入れる</Button>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default page
