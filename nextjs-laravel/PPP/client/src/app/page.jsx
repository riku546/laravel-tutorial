'use client'

import ProblemDetail from '@/components/selfMadeComponents/ProblemDetail'
import Nav from '@/components/selfMadeComponents/Nav'
import useHome from '@/hooks/useHome'
import {
    Button,
    CircularProgress,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from '@mui/material'

const Home = () => {
    const {
        problemLevels,
        setLevel,
        setProgrammingLang,
        verifyLoginAndFetch,
        problemInfos,
        isLoading,
    } = useHome()

    return (
        <div>
            <Nav />

            {/* isLoadingがtrueの時は、ローディングアイコンを表示する */}
            {isLoading && (
                <CircularProgress style={{ width: '80px', height: '80px' }} />
            )}

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
                {/* isLoadingがtrueの時はbuttonを非表示にする */}
                {isLoading ? (
                    ''
                ) : (
                    <Button
                        variant="contained"
                        disableElevation
                        onClick={verifyLoginAndFetch}>
                        問題を生成
                    </Button>
                )}
            </div>
            {problemInfos &&
                problemInfos
                    .flat()
                    .map(text => <p key={text}>{text}</p>)}
        </div>
    )
}

export default Home
