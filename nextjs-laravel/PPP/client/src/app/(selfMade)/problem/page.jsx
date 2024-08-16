'use client'

import DisplayProblemInfo from '@/components/selfMadeComponents/DisplayProblemInfo'
import ReviewDialog from '@/components/selfMadeComponents/ReviewDialog'
import useProblem from '@/hooks/useProblem'

import React from 'react'

const page = () => {
    const { problemInfo, reviewData, problemId } = useProblem()
    return (
        <div>
            <div>
                <p>{reviewData.stars}</p>
                <p>{reviewData.reviewCount}</p>
            </div>
            <DisplayProblemInfo problemInfos={problemInfo} />
            <ReviewDialog problemId={problemId} />
        </div>
    )
}

export default page
