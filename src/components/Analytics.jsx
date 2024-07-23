import React from 'react'
import Laptop from '../assets/img/laptop.jpg'

const Analytics = () => {
    return (
        <div className='w-full bg-white px-4 py-16'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src={Laptop} alt="" className='w-[500px] mx-auto my-4' />
                <div className='flex flex-col justify-center'>
                    <p className='uppercase text-green-400 font-bold'>Data Analytics Dashboard</p>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                        eveniet ex deserunt fuga?
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:ml-0 px-6 py-3'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics