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
            productId: 0,
        },
        {
            name: 'ipad',
            description: 'ipad',
            productId: 2,
        },
        {
            name: 'mouse',
            description: 'mouse',
            productId: 3,
        },
        {
            name: 'iphone15',
            description: 'iphone15',
            productId: 1,
        },
        {
            name: 'monitor',
            description: 'monitor',
            productId: 4,
        },
        { name: 'keyboard', description: 'keyboard', productId: 5 },
        {
            name: 'tissue',
            description: 'tissue',
            productId: 6,
        },
        {
            name: 'microphone',
            description: 'microphone',
            productId: 7,
        },
    ]
    return (
        <div className="container">
            <Header />

            <main className={styles.mainArea}>
                {product_infos.map(info => (
                    <Link
                        href={{
                            pathname: '/productPage',
                            query: { productId: info.productId },
                        }}>
                        <ProductCard
                            name={info.name}
                            productId={info.productId}
                        />
                    </Link>
                ))}
            </main>
        </div>
    )
}

export default Home
