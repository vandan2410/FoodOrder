import React from "react";
import { MdShoppingBasket ,MdAdd ,MdLogout, MdTimeToLeave } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import logo from "../img/logo.png";
import avatar from "../img/avatar.png";
import { useStateValue } from "../context/StateProvide";
import { actionType } from "../context/reducer";
import { useState } from "react";
import CartItem from "./CartItem";


const Header = () => {

    const firebaseauth=getAuth(app);
    const provider=new GoogleAuthProvider();

    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

    const [Ismenu ,setIsmenu]=useState(false);

    const login=async()=>{
        if (!user){
            const { user:{ refreshToken,providerData } } = await signInWithPopup(firebaseauth,provider);
            dispatch({
                type:actionType.SET_USER,
                user:providerData[0]
            });
            localStorage.setItem('user',JSON.stringify(providerData[0]));
        }else{
            setIsmenu(!Ismenu);
        }


    };

    const Logout=()=>{
        setIsmenu(false)
        localStorage.clear()

        dispatch({
            type: actionType.SET_USER,
            user:null,
        });
    };

    const showCart = () => {
        dispatch({
          type: actionType.SET_CART_SHOW,
          cartShow: !cartShow,
        });
      };

  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 shadow-md bg-orange-500'>
        {/* Desktop and tablet */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
            <Link to={"/"} className='flex items-center gap-2 '>
                <img src={logo} className='w-8 object-cover' alt="" />
                <p className='text-white text-xl font-bold'>city</p>
            </Link>
            <div className='flex items-center gap-8'>
                <motion.ul initial={{opacity:0 ,x:200}}
                           animate={{opacity:1 ,x:0}}
                           exit={{opacity:0 ,x:200}}className="flex items-center gap-8 ">
                    <li ><Link to={"/"} className='text-base text-white hover:text-orange-300 cursor-pointer duration-100 transition-all ease-in-out'>Home</Link></li>
                    <li ><Link to="menu"  span={true} smooth={true} className='text-base text-white hover:text-orange-300 cursor-pointer duration-100 transition-all ease-in-out'>Menu</Link></li>
                    <li className='text-base text-white hover:text-orange-300 cursor-pointer duration-100 transition-all ease-in-out'>About Us</li>
                    <li className='text-base text-white hover:text-orange-300 cursor-pointer duration-100 transition-all ease-in-out'>Service</li>
                </motion.ul>

                <div className='relative flex items-center justify-center'  onClick={showCart}>
                    <MdShoppingBasket className='text-orange-200 text-2xl  cursor-pointer' />
                    {
                        cartItems && cartItems.length>0 && (
                            <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                        <p className='text-xs text-white font-semibold'> {cartItems.length}</p>
                    </div>
                        )
                    }
                </div>
                

                <div className='relative'>
                    <motion.img whileTap={{ scale:0.6 }} 
                    src={user ? user.photoURL : avatar} alt="userprofile" 
                    className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" 
                    onClick={login} />

                    {
                        Ismenu && (
                            <motion.div initial={{opacity:0 ,scale:0.6}}
                                        animate={{opacity:1 ,scale:1}}
                                        exit={{opacity:0 ,scale:0.6}}
                             className="w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute top-12 right-0 ps-4 py-2 ">
                        {
                            user && user.email === "dhirajgilda12@gmail.com" &&(
                               <Link to={"/createItem"}>
                                     <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 
                                     transition-all duration-100 ease-in-out text-textColor text-base" onClick={() => setIsmenu(false)}>New Item <MdAdd/></p>
                               </Link>
                            )
                        }
                        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 
                        transition-all duration-100 ease-in-out text-textColor text-base" onClick={Logout}>Logout <MdLogout/></p>
                    </motion.div>
                        )
                    }
                </div>
            </div>
        </div>
        {/* mpbile */}
        <div className='flex items-center justify-between md:hidden w-full h-full'>
            <Link to={"/"} className='flex items-center gap-2 '>
                <img src={logo} className='w-8 object-cover' alt="" />
                <p className='text-white text-xl font-bold'>city</p>
            </Link>

          


            <div className='relative flex gap-8'>
                    <div className='relative flex items-center justify-center' onClick={showCart}>
                        <MdShoppingBasket className='text-orange-200 text-2xl  cursor-pointer' />
                        {cartItems && cartItems.length > 0 && (
                            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold">
                                {cartItems.length}
                            </p>
                    </div>
                )}
                    </div>

                    <motion.img whileTap={{ scale:0.6 }} 
                    //if url dosent load {referrerpolicy="no-referrer"} add this 
                    src={user ? user.photoURL : avatar}   alt="userprofile" 
                    className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" 
                    onClick={login} />

                    {
                        Ismenu && (
                            <motion.div initial={{opacity:0 ,scale:0.6}}
                                        animate={{opacity:1 ,scale:1}}
                                        exit={{opacity:0 ,scale:0.6}}
                             className="w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute top-12 right-0  py-2 ">
                        {
                            user && user.email === "dhirajgilda12@gmail.com" &&(
                               <Link to={"/createItem"}>
                                     <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 
                                     transition-all duration-100 ease-in-out text-textColor text-base">New Item <MdAdd/></p>
                               </Link>
                            )
                        }

                        <ul className="flex flex-col items-start ">
                            <li className='w-full text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out hover:bg-slate-200 px-4 py-2 'onClick={() => setIsmenu(false)}>Home</li>
                            <li className='w-full text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out hover:bg-slate-200 px-4 py-2 'onClick={() => setIsmenu(false)}>Menu</li>
                            <li className='w-full text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out hover:bg-slate-200 px-4 py-2'onClick={() => setIsmenu(false)}>About Us</li>
                            <li className='w-full text-base text-textColor hover:text-orange    -300 cursor-pointer duration-100 transition-all ease-in-out hover:bg-slate-200 px-4 py-2'onClick={() => setIsmenu(false)}>Service</li>
                        </ul>

                        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-black
                        transition-all duration-100 ease-in-out bg-black text-white font-bold text-base" onClick={Logout}>Logout <MdLogout/></p>
                    </motion.div>
                        )
                    }

                </div>

        </div>
    </header>
  );
};

export default Header;