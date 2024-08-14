import { Rating } from '@mui/material'
import React from 'react'

const ProblemList = ({ problemInfos, redirectProblemPage }) => {
    return (
        <div style={{ display: 'flex', gap: '30px', flexDirection: 'column' }}>
            {problemInfos.map(problemInfo => (
                <div
                    key={problemInfo.id}
                    //問題の詳細ページにリダイレクトする
                    onClick={() => redirectProblemPage(problemInfo.id)}>
                    <p>問題番号：{problemInfo.id}</p>
                    <p>プログラミング言語：{problemInfo.programmingLang}</p>
                    <p>レベル：{problemInfo.level}</p>
                    <div>
                        <Rating
                            name="read-only"
                            value={problemInfo.stars}
                            readOnly
                        />
                        <span>{problemInfo.review_count}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProblemList
