'use client'

import Nav from '@/components/selfMadeComponents/Nav'
import useHome from '@/hooks/useHome'
import axios from '@/lib/axios'
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from '@mui/material'
import { useEffect } from 'react'

const Home = () => {
    const {
        problemLevels,
        setLevel,
        setProgrammingLang,
        verifyLoginAndFetch,
        problemInfo,
    } = useHome()

    return (
        <div>
            <Nav />
            <div>
                <input
                    type="text"
                    placeholder="php"
                    onChange={e => setProgrammingLang(e.target.value)}
                />
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                        Level
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="初級"
                        name="radio-buttons-group">
                        {problemLevels.map(level => (
                            <FormControlLabel
                                key={level}
                                value={level}
                                control={<Radio />}
                                label={level}
                                onClick={() => setLevel(level)}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
                <Button
                    variant="contained"
                    disableElevation
                    onClick={verifyLoginAndFetch}>
                    問題を生成
                </Button>
            </div>
        </div>
    )
}

export default Home
