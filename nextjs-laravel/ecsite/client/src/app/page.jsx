import Header from '@/components/selfMade/Header'
import ProductCard from '@/components/selfMade/ProductCard'
import styles from '@/styles/pages/topPage.module.css'
import './global.css'

const Home = () => {
    const product_infos = []
    return (
        <div className="container">
            <Header></Header>
            <main className={styles.mainArea}>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </main>
        </div>
    )
}

export default Home
