import { Box, Paper, Typography, TextField, Button, Avatar } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FbLogin, FbSignup } from "../admin_config/firebaseMethods/firebasemethods";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import MALoader from "../admin_assets/MALoader";
export default function LoginFunc() {
    const [pushData, setPushData] = useState<any>({})
    const [open, setOpen] = useState(false);

    const fillModel = (key: any, val: any) => {
        pushData[key] = val
        setPushData({ ...pushData })
    }
    const logInBtn = () => {
        console.log(pushData)
        setOpen(true)
        FbLogin(pushData)
            .then((res) => {
                setOpen(false)
                navigate('/')
            })
            .catch((err) => {
                setOpen(false)
                alert(err)
            })
    }
    const navigate = useNavigate()
    let loginRout = () => {
        navigate(`/signup`)
    }
    return (
        <div>
            <div className="bg-gradient-to-r from-red-500 via-red-700 to-red-500  flex justify-center h-screen items-center">
                <div className="bg-black transition-border ease-in-out p-10 border-y-4 border-white text-center  rounded-md hover:border-t-0 hover:duration-1000 hover:border-y-0 hover:border-x-4 hover:transition-all">
                    <div>
                        <Backdrop
                            sx={{ color: '', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                        >
                            <CircularProgress />
                        </Backdrop>
                    </div>
                    <div className="flex justify-center">
                        <Avatar className="bg-gradient-to-r from-red-700 via-red-500 to-red-700" src="/broken-image.jpg" />
                    </div>
                    <Box className='mt-3'>
                        <TextField variant="filled" className="bg-white w-100 rounded-sm" color="error" focused onChange={(e) => fillModel('email', e.target.value)} label='Email' type="email" />
                    </Box>
                    <Box className='mt-3'>
                        <TextField variant="filled" className="bg-white w-100 rounded-sm" color="error" focused onChange={(e) => fillModel('password', e.target.value)} label='Password' type="password" />
                    </Box>
                    <Box className='mt-3 '>
                        <Button onClick={logInBtn} className="bg-gradient-to-r from-red-700 via-red-500 to-red-700 w-100 transition-all ease-in-out hover:bg-gradient-to-r hover:from-red-500 hover:via-red-700 hover:to-red-500 hover:transition-all hover:duration-1000" variant="contained">Login</Button>
                    </Box>
                    <Box className='mt-2'>
                        <p className="text-red-700">Already have an account <span className="linking" onClick={() => loginRout()}>Sign Up</span></p>
                    </Box>
                </div>
            </div>
        </div>
    )
}