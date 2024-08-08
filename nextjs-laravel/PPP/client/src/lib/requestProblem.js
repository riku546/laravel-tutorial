//この関数はサーバサイド側の問題を生成するエンドポイントを叩いて、問題の情報を返す。

export const requestProblem = async (level, programmingLang) => {
    const requestInfo = { level: level, programmingLang: programmingLang }
    try {
        const problemInfo = await axios.post(
            '/api/generateProblem',
            requestInfo,
        )
        return problemInfo
    } catch (error) {
        throw error
    }
}
