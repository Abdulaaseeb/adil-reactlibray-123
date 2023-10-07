import { Backdrop, CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FbAuth } from '../admin_config/firebaseMethods/firebasemethods'
export default function Protected(props: any) {
    const { Screen } = props
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate()
    const checkAuth = () => {
        setLoader(true)
        FbAuth()
       .then(res => {
           setLoader(false)
        })
        .catch(err => {
            navigate('/login')
            setLoader(false)
       })
    }
    useEffect(() => {
        checkAuth()
    }, [])
    return (
        loader ? (
            <>
                <Backdrop
                    sx={{ color: 'WindowText', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loader}
                >
                    <CircularProgress /></Backdrop>
            </>
        ) : (
            <Screen />
        )
    )
}