//この関数はユーザーがログインしているかどうかを判定する
//もしログインしていなかったら、catch処理が実行され、ログイン画面にリダイレクトされる
export const checkUserLogined = async () => {
    try {
        const { data } = await axios.get('/api/user')
    } catch (error) {
        alert('ログインしてください')
    }
}
