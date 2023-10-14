import { NavLink, Outlet } from "react-router-dom";

import { BsSearch, BsBell, BsHeart, BsMoon } from "react-icons/bs";
import { BiHomeAlt, BiPieChartAlt, BiWallet, BiLogOut } from "react-icons/bi";
const Home = () => {
    return (
        <>
            {/* 1st */}
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                {/* content holder */}
                <div className="drawer-content ">

                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    <Outlet />

                </div>


                {/* 2nd */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-[255px] min-h-full  bg-[#313131] text-white ">
                        <div className="">
                            <div className="flex flex-col items-center ">
                                <h2 className="text-3xl font-bold">Welcome</h2>
                                <p className="text-[16px]">Sir Lakshmi Store</p>
                            </div>

                            <div className="mt-[35px] flex flex-col gap-5">
                                {/* search */}
                                <div className="bg-[#F09F00] h-[50px] w-[220px] rounded-lg text-white flex items-center  justify-center gap-3 px-4">
                                    <BsSearch className="h-5 w-5" />
                                    <input className="bg-transparent placeholder-white text-base font-semibold placeholder-lg w-11/12" placeholder="Search..." type="text" name="" id="" />
                                </div>

                                {/* home */}
                                <NavLink to='/' className={({ isActive }) => isActive ? 'active-route' : 'inactive-route'}>
                                    <BiHomeAlt className="h-5 w-5" />
                                    Home</NavLink>

                                {/* loyality */}
                                <NavLink to='/1' className={({ isActive }) => isActive ? 'active-route' : 'inactive-route'}>
                                    <BsBell className="h-5 w-5" />
                                    Loyality Setting
                                </NavLink>
                                {/* analytics */}
                                <NavLink to='/2' className={({ isActive }) => isActive ? 'active-route' : 'inactive-route'}>
                                    <BiPieChartAlt className="h-5 w-5" />
                                    Analytics</NavLink>

                                {/* profile setting */}
                                <NavLink to='/3' className={({ isActive }) => isActive ? 'active-route' : 'inactive-route'}>
                                    <BsHeart className="h-5 w-5" />
                                    Profile Setting</NavLink>

                                {/* Transaction History */}
                                <NavLink to='/transaction_history' className={({ isActive }) => isActive ? 'active-route' : 'inactive-route'}>
                                    <BiWallet className="h-5 w-5" />
                                    Transaction History</NavLink>

                                {/* logout */}
                                <NavLink to='/4' className={({ isActive }) => isActive ? 'active-route' : 'inactive-route'}>
                                    <BiLogOut className="h-5 w-5" />
                                    Logout</NavLink>

                                <div className="bg-[#F09F00] h-[45px] w-[220px] rounded-lg text-white flex items-center  justify-center gap-3 px-4 text-base">
                                    <BsMoon className="h-5 w-5" />
                                    dark mode
                                </div>

                            </div>
                        </div>

                    </ul>

                </div>
            </div>
        </>
    );
};

export default Home;