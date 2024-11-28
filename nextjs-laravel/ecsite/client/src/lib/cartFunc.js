export const addToCart = (productId, buyQuantity) => {
    const cart = sessionStorage.getItem('cart')

    //セッションにカートのデータがない場合
    //新しくオブジェクトを作成して、セッションに追加
    if (!cart) {
        sessionStorage.setItem(
            'cart',
            //オブジェクトをjson形式の文字列に変換(セッションはデータを文字列で保存するため、文字列にする必要がある)
            JSON.stringify({ [productId]: Number(buyQuantity) }),
        )
    }
    //セッションに既にデータが保存されていたら
    //新しくデータを追加 または 更新する
    else {
        //jsonからオブジェクトに変換する
        const currentCart = JSON.parse(cart)
        currentCart[productId] = Number(buyQuantity)
        sessionStorage.setItem('cart', JSON.stringify(currentCart))
    }
}

export const updateCartContents = () => {
    
}

export const deleteProductInCart = () =>{}

export const getCartInfo = () => {
    const cartContents = JSON.parse(sessionStorage.getItem('cart'))
    return cartContents
}
