'use client'

import DisplayProblemInfo from '@/components/selfMadeComponents/DisplayProblemInfo'
import Nav from '@/components/selfMadeComponents/Nav'
import ReviewDialog from '@/components/selfMadeComponents/ReviewDialog'
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
            {/* 問題が生成されたときに表示される */}
            {problemInfos && <DisplayProblemInfo problemInfos={problemInfos} />}
        </div>
    )
}

export default Home
