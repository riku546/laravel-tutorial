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

//カート（セッション）に保存されている商品の総数を返す
export const sumQuantityInCart = () => {
    //jsonからオブジェクトに変換する
    const cart = JSON.parse(sessionStorage.getItem('cart'))
    let sumQuantity = 0

    Object.keys(cart).forEach(key => {
        sumQuantity += cart[key]
    })

    return sumQuantity
}
