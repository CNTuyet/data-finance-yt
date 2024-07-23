import React from 'react'

const NewsLetter = () => {
    return (
        <div className='w-full px-4 py-16 bg-black text-white'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                {/* Chiếm 2 cột trong grid */}
                <div className='lg:col-span-2 my-4'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='mt-4'>
                    {/* nhỏ hơn sm thì hiển thị cột, từ sm trở lên hiển thị dòng */}
                    <div className='w-full flex flex-col sm:flex-row items-center justify-between'>
                        <input className='p-3 w-full rounded-md text-black' type="email" placeholder='Enter your email here.' />
                        <button className='bg-[#00df9a] w-[200px] text-black rounded-md font-medium ml-4 my-6 mx-auto md:ml-2 px-6 py-3'>Notify Me!</button>
                    </div>
                </div>
                <p>We care bout the protection of your data. Read our
                    <span className='pl-1 text-[#00df9a]'>Privacy policy.</span>
                </p>
            </div>
        </div>
    )
}

export default NewsLetter