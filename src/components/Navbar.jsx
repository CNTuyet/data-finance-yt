import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    //Thay đổi giá trị của nav thành ngược lại true <-> false
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
            <h1 className='w-full font-bold text-3xl text-[#00df9a]'> REACT.</h1>
            {/* Mặc định ẩn đi, nhưng đối với màn hình kích cỡ medium thì hiển thị dưới dạng flexbox */}
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            {/* Đây là navbar dành cho mobile, nó sẽ ẩn đi nếu màn hình kích cỡ medium */}
            <div onClick={handleNav} className='block md:hidden'>
                {/* Nếu nav = true thì hiển thị icon close, ngược lại hiển thị icon menu */}
                {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </div>
            {/* Nếu nav = true thì hiển thị thanh navbar, ngược lại ẩn nó qua bên cạnh */}
            {/* ease-in-out là animation vs thời gian là duration */}
            <div className={nav ? 'fixed left-0 top-0 h-full border-r border-r-gray-900 w-[60%] bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full font-bold text-3xl text-[#00df9a] m-4 pt-4'> REACT.</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar