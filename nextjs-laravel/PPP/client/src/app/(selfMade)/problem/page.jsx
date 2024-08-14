'use client'

import DisplayProblemInfo from '@/components/selfMadeComponents/DisplayProblemInfo'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const searchParm = useSearchParams()
    //URLに含まれるproblemパラメーターを取得
    const problemId = searchParm.get('problemId')
    return <DisplayProblemInfo />
}

export default page
