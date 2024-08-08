'use client'

import axios from '@/lib/axios'
import React, { useState } from 'react'

const useHome = () => {
    const problemLevels = ['初級', '中級', '上級']
    const [level, setLevel] = useState('初級')
    const [programmingLang, setProgrammingLang] = useState('php')

    const requestProblem = async () => {
        const requestInfo = { level: level, programmingLang: programmingLang }
        try {
            const problemInfo = await axios.post(
                '/api/generateProblem',
                requestInfo,
            )
            console.log("success")
        } catch (error) {
            console.log(error)
        }
    }

    return {
        problemLevels,
        setLevel,
        setProgrammingLang,
        requestProblem,
    }
}

export default useHome
