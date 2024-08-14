'use client'

import DisplayProblemInfo from '@/components/selfMadeComponents/DisplayProblemInfo'
import useProblem from '@/hooks/useProblem'

import React from 'react'

const page = () => {
    const { problemInfo, reviewData } = useProblem()
    return (
        <div>
            <div>
                <p>{reviewData.stars}</p>
                <p>{reviewData.reviewCount}</p>
            </div>
            <DisplayProblemInfo problemInfos={problemInfo} />
        </div>
    )
}

export default page
