import Header from '@/components/selfMade/Header'
import ProductCard from '@/components/selfMade/ProductCard'
import styles from '@/styles/pages/topPage.module.css'
import './global.css'
import Link from 'next/link'

const Home = () => {
    const product_infos = [
        {
            name: 'water',
            description: 'waterwater',
            productId:0,
        },
        {
            name: 'water',
            description: 'waterwater',
            productId:0,
        },
        {
            name: 'water',
            description: 'waterwater',
            productId:0,
        },

        
    ]
    return (
        <div className="container">
            <Header />

            <main className={styles.mainArea}>
                {product_infos.map((info) => (
                    <Link
                        href={{
                            pathname: '/productPage',
                            query: { productId: info.productId },
                        }}>
                        <ProductCard
                            name={info.name}
                            description={info.description}
                        />
                    </Link>
                ))}
            </main>
        </div>
    )
}

export default Home
