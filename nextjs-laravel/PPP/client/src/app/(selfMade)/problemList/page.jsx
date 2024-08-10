'use client'

import useProblemList from '@/hooks/useProblemList'
import React from 'react'

const page = () => {
    const { allProblems } = useProblemList()
    return (
        <div>
            {allProblems.map(problemInfo => (
                <div key={problemInfo.id}>
                    <ul>
                        <li>問題番号：{problemInfo.id}</li>
                        <li>プログラミング言語：{problemInfo.programmingLang}</li>
                        <li>レベル：{problemInfo.level}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default page
