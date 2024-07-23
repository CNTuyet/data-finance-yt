import React from 'react'
import Single from '../assets/img/single.png'
import Double from '../assets/img/double.png'
import Triple from '../assets/img/triple.png'

const Cards = () => {
    return (
        <div className='w-full bg-white px-4 py-[10rem]'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg text-center hover:scale-105 duration-100'>
                    <img className='w-20 bg-white ml-[43%] mt-[-3rem]' src={Single} alt="" />
                    <h2 className='text-2xl text-center font-bold py-8'>Single User</h2>
                    <p className='text-4xl font-bold'>$149</p>
                    <div className='font-medium mt-8'>
                        <p className='py-2 mx-8 border-b'>500 GB Storage</p>
                        <p className='py-2 mx-8 border-b'>1 Granted User</p>
                        <p className='py-2 mx-8 border-b'>Send up to 2 GB</p>
                    </div>
                    <button className='w-[200px] bg-green-400 hover:bg-green-500 rounded-md font-medium my-6 mx-auto px-6 py-3'>
                        Start Trial
                    </button>
                </div>
                <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg text-center hover:scale-105 duration-100'>
                    <img className='w-20 bg-tranparent mx-auto mt-[-3rem]' src={Double} alt="" />
                    <h2 className='text-2xl text-center font-bold py-8'>Double User</h2>
                    <p className='text-4xl font-bold'>$149</p>
                    <div className='font-medium mt-8'>
                        <p className='py-2 mx-8 border-b'>500 GB Storage</p>
                        <p className='py-2 mx-8 border-b'>1 Granted User</p>
                        <p className='py-2 mx-8 border-b'>Send up to 2 GB</p>
                    </div>
                    <button className='w-[200px] text-green-400 bg-black rounded-md font-medium my-6 mx-auto px-6 py-3'>
                        Start Trial
                    </button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg text-center hover:scale-105 duration-100'>
                    <img className='w-20 bg-white mx-auto mt-[-3rem]' src={Triple} alt="" />
                    <h2 className='text-2xl text-center font-bold py-8'>Triple User</h2>
                    <p className='text-4xl font-bold'>$149</p>
                    <div className='font-medium mt-8'>
                        <p className='py-2 mx-8 border-b'>500 GB Storage</p>
                        <p className='py-2 mx-8 border-b'>1 Granted User</p>
                        <p className='py-2 mx-8 border-b'>Send up to 2 GB</p>
                    </div>
                    <button className='w-[200px] bg-green-400 hover:bg-green-500 rounded-md font-medium my-6 mx-auto px-6 py-3'>
                        Start Trial
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Cards