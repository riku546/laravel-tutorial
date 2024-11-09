export const addToCart = (productId, buyQuantity) => {
    const cart = sessionStorage.getItem('cart')

    //セッションにカートのデータがない場合
    //新しくオブジェクトを作成して、セッションに追加
    if (!cart) {
        sessionStorage.setItem(
            'cart',
            JSON.stringify({ [productId]: Number(buyQuantity) }),
        )
    }
    //セッションに既にデータが保存されていたら
    //新しくデータを追加 または 更新する
    else {
        const currentCart = JSON.parse(cart)
        currentCart[productId] = Number(buyQuantity)
        sessionStorage.setItem('cart', JSON.stringify(currentCart))
    }
}
