import React from 'react';
import bannerImg from '../assets/bannerImg.jpg';
import { motion } from "motion/react";

const Banner = () => {
    return (
        <div className='bg-primary relative'>
            <div className='text-white flex pt-10'>
                <div className='w-1/2 flex flex-col gap-10 pb-28'>
                    <div className='relative left-1/4 space-y-6'>
                        <h1 className='text-7xl font-semibold'>Find & Hire <br /> <span className='text-secondary'>Top 3% of experts</span> <br /> <span className='text-secondary'>on JobZen</span></h1>
                        {/* <p>We delivered blazing fast & striking work solution</p> */}
                    </div>
                    <div className='flex relative left-2/4 z-10'>
                        <form className="flex  flex-row justify-center items-center bg-white rounded-2xl">
                            <div className='pl-5 py-3'>
                                <p className='text-slate-400'>What are you looking for?</p>
                                <input type="text" placeholder="Developer, Designer" className="input w-full max-w-xs" />
                            </div>
                            <div className='divider-horizontal'></div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-slate-400'>Category</p>
                                {/* <input type="text" placeholder="" className="input w-full max-w-xs" /> */}
                                <select className='text-black select' name="" id="">
                                    <option value="developer">Web Developer</option>
                                    <option value="designer">Web Designer</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="programmer">Programmer</option>
                                </select>
                            </div>
                            <div className='bg-secondary btn border-none rounded-r-2xl font-bold btn-wide  h-full text-center flex items-center justify-center text-black'>
                                Search
                            </div>
                        </form>
                    </div>
                        <div className='text-center absolute left-1/3 bottom-7 text-slate-400'><p>We delivered blazing fast & striking work solution</p></div>
                </div>
                <div className='w-1/2 flex justify-center absolute right-16'>
                    <motion.img
                        className='h-[700px] rounded-lg' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;