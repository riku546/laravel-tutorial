//生成された問題とヒントと答えの"\n"を"<br>"に変換する

export const convertToBr = problemInfos => {
    const arrayProblemInfos = Object.values(problemInfos)
    return arrayProblemInfos.map(problemInfo => problemInfo.split('\n'))
}
