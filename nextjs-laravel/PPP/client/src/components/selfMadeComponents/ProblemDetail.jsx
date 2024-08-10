import React from 'react'

//画面に生成された問題とヒントと答えを表示するコンポーネント
const ProblemDetail = ({ problemInfos }) => {
    return (
        <div>
            {Object.entries(problemInfos).map(([key, problemInfo]) => (
                <div>
                    <p>{key}</p>
                    {problemInfo.map(text => (
                        <p>{text}</p>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default ProblemDetail
