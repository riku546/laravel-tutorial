import Header from '@/components/selfMade/Header'
import ReadStars from '@/components/selfMade/ReadStars'
import React from 'react'
import styles from '@/styles/pages/productPage.module.css'

const page = () => {
    return (
        <div className="container">
            <Header />

            <main className={styles.mainArea}>
                <img src="/view-water-with-plastic-bottle.jpg" alt="" />
                <article className={styles.productInfos}>
                    <h4 className={styles.productName}>water</h4>
                    <p className={styles.description}>
                        硬度15の国内でも数少ない柔らかいお水となります。日本人に適していると言われる硬度15㎎/Lの軟水は、口当たりがまろやかで飲みやすい優しいお水。そのままでも、お料理やお酒の水割り、お茶やコーヒーなど様々な用途にお使いいただけます。
                    </p>
                    <div>
                        <div>
                            <ReadStars />
                            <p className={styles.price}>$ 100</p>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default page
