// このモジュールでは、カートの中身の取得 カートに商品を追加 カートの中身を変更 カートから商品を削除する関数が用意されている。

export const getCartContents = () => {
    // セッションではjson形式の文字列が保存されているので、カートをオブジェクトに変換
    const cartContents = JSON.parse(sessionStorage.getItem('cart'))
    return cartContents
}

const setCartContents = cartContents => {
    //オブジェクトをjson形式の文字列に変換(セッションはデータを文字列で保存するため、文字列にする必要がある)
    sessionStorage.setItem('cart', JSON.stringify(cartContents))
}

export const addToCart = (productId, /*商品の購入個数*/ buyQuantity) => {
    const cartContents = getCartContents()

    //セッションにカートのデータがない場合
    //新しくオブジェクトを作成して、セッションに追加
    if (!cartContents) {
        sessionStorage.setItem(
            'cart',
            //オブジェクトをjson形式の文字列に変換(セッションはデータを文字列で保存するため、文字列にする必要がある)
            JSON.stringify({ [productId]: Number(buyQuantity) }),
        )
    }
    //セッションに既にデータが保存されていたら
    //新しくデータを追加 または 更新する
    else {
        cartContents[productId] = buyQuantity
        setCartContents(cartContents)
    }
}

export const updateCartContents = (
    productId,
    /*商品の購入個数*/ buyQuantity,
) => {
    const cartContents = getCartContents()
    cartContents[productId] = buyQuantity
    setCartContents(cartContents)
}

export const deleteProductInCart = productId => {
    const cartContents = getCartContents()
    delete cartContents[productId]
    setCartContents(cartContents)
}
