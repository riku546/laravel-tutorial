'use client'

import useProblemList from '@/hooks/useProblemList'
import React from 'react'

const page = () => {
    const { allProblems } = useProblemList()
    return (
        <div>
            <div>
                {' '}
                {allProblems.map(problemInfo => (
                    <div key={problemInfo.id}>
                        <p>問題番号：{problemInfo.id}</p>
                        <p>プログラミング言語：{problemInfo.programmingLang}</p>
                        <p>レベル：{problemInfo.level}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page
