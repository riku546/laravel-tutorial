import React from 'react'

const ProblemList = ({ problemInfos }) => {
    return (
        <div style={{ display: 'flex', gap: '30px', flexDirection: 'column' }}>
            {problemInfos.map(problemInfo => (
                <div key={problemInfo.id}>
                    <p>問題番号：{problemInfo.id}</p>
                    <p>プログラミング言語：{problemInfo.programmingLang}</p>
                    <p>レベル：{problemInfo.level}</p>
                    <p>評価</p>
                </div>
            ))}
        </div>
    )
}

export default ProblemList
