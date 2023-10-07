import { useState } from "react";
import { Link } from "react-router-dom";
import userImg from '../admin_assets/img/user.png'
import { Button } from "@mui/material";

export default function MANavbar() {
    const [isOpenProfile, setIsOpenProfile] = useState(false)
    const [isOpenNav, setIsOpenNav] = useState(false)
    return (
        <>
            <nav className="bg-black">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" onClick={() => setIsOpenNav(!isOpenNav)} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <h4><span className="text-danger underline">HMA</span><span></span><span className="text-white underline">Collection</span></h4>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex justify-center space-x-4">
                                    <Link to="/" className="text-slate-100 hover:bg-black hover:text-red-400  active-link rounded-sm px-3 py-2 text-sm font-medium">Home</Link>
                                    <Link to="#" className="text-slate-100 hover:bg-black hover:text-red-400  active-link rounded-sm px-3 py-2 text-sm font-medium">All Products</Link>
                                    <Link to="#" className="text-slate-100 hover:bg-black hover:text-red-400  active-link rounded-sm px-3 py-2 text-sm font-medium">Become A Seller</Link>

                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                            <div className="relative ml-3 ">
                                <div className="flex ">
                                    <div className="md:block sm:hidden hidden ">
                                        <Link to={'/login'}><Button variant="contained" color="error" className="mx-2 mt-2">Login</Button></Link>
                                    </div>
                                    <div>
                                    <Link to={'/signup'}><Button variant="contained" color='error' className="mx-2 mt-2">Sign Up</Button></Link>
                                    </div>
                                    <button type="button" className="relative  rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mx-2" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => setIsOpenProfile(!isOpenProfile)}>
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-12 w-12 rounded-full" src={userImg} alt="" />
                                    </button>
                                </div>


                                {isOpenProfile ? (
                                    <>
                                        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black opacity-90 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >
                                            <Link to="#" className="block px-4 py-2 text-sm text-white" role="menuitem" id="user-menu-item-0">Your Profile</Link>
                                            <Link to="#" className="block px-4 py-2 text-sm text-white" role="menuitem" id="user-menu-item-1">Settings</Link>
                                            <Link to="#" className="block px-4 py-2 text-sm text-white" role="menuitem" id="user-menu-item-2">Sign out</Link>

                                        </div>
                                    </>
                                ) : ('')}
                            </div>
                        </div>
                    </div>
                </div>
                {isOpenNav ? (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="flex flex-col space-y-1 px-2 pb-3 pt-2">
                            <Link to="#" className="text-slate-100 hover:bg-black hover:text-red-400 focus:bg-white focus:text-red-500 rounded-sm px-3 py-2 text-sm font-medium">Dashboard</Link>
                            <Link to="#" className="text-slate-100 hover:bg-black hover:text-red-400 focus:bg-white focus:text-red-500 rounded-sm px-3 py-2 text-sm font-medium">Team</Link>
                            <Link to="#" className="text-slate-100 hover:bg-black hover:text-red-400 focus:bg-white focus:text-red-500 rounded-sm px-3 py-2 text-sm font-medium">Projects</Link>
                            <Link to="#" className="text-slate-100 hover:bg-black hover:text-red-400 focus:bg-white focus:text-red-500 rounded-sm px-3 py-2 text-sm font-medium">Calendar</Link>
                            <Link to={'/login'}><Button variant="contained" color="error" className="mx-2 mt-2">Login</Button></Link>
                            <Link to={'/signup'}><Button variant="contained" color='error' className="mx-2 mt-2">Sign Up</Button></Link>
                        </div>
                    </div>

                ) : ('')}
            </nav>
        </>
    )
}