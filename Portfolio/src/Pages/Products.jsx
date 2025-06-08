import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import Card from '../Components/Card';
import prod1 from '../assets/Products/1.jpg'
import prod2 from '../assets/Products/2.jpg'
import prod3 from '../assets/Products/3.JPG'
import prod4 from '../assets/Products/4.JPG'
import prod5 from '../assets/Products/5.JPG'
import prod6 from '../assets/Products/6.JPG'
import prod7 from '../assets/Products/7.JPG'
import prod8 from '../assets/Products/8.JPG'
import prod9 from '../assets/Products/9.JPG'
import prod10 from '../assets/Products/10.JPG'

import prod11 from '../assets/Products/11.JPG'
import prod12 from '../assets/Products/12.JPG'
import prod13 from '../assets/Products/13.JPG'
import prod14 from '../assets/Products/14.JPG'
import prod15 from '../assets/Products/15.JPG'
import prod16 from '../assets/Products/16.JPG'
import prod17 from '../assets/Products/17.JPG'
import prod18 from '../assets/Products/18.JPG'
import prod19 from '../assets/Products/19.JPG'
import prod20 from '../assets/Products/20.JPG'

import prod21 from '../assets/Products/21.JPG'
import prod22 from '../assets/Products/22.JPG'
import prod23 from '../assets/Products/23.JPG'
import prod24 from '../assets/Products/24.JPG'
import prod25 from '../assets/Products/25.JPG'
import prod26 from '../assets/Products/26.JPG'
import prod27 from '../assets/Products/27.JPG'
import prod28 from '../assets/Products/28.JPG'
import prod29 from '../assets/Products/29.JPG'
import prod30 from '../assets/Products/30.JPG'



import { useNavigate } from 'react-router-dom';

function Products() {
    const navigate = useNavigate()
    function goBack(){navigate('/')}
    return (
        <div className='bg-midnight h-auto lg:h-auto'>
            <section className='flex items-center justify-center w-full p-5'>
                <div className='w-1/2'>
                    <IoMdArrowBack onClick={goBack}className='text-Accent ml-3 text-3xl' />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-Accent text-3xl uppercase -ml-15'>Brand Visuals</h1>
                </div>
            </section>

            <section>
                {/* grid section */}
                <div className='flex items-center justify-center'>
                    <div className='gap-2 grid grid-cols-1 grid-rows-10 lg:grid-cols-4 '>
                      <Card source={prod1}/>
                      <Card source={prod2}/>
                      <Card source={prod3}/>
                      <Card source={prod4}/>
                      <Card source={prod5}/>
                      <Card source={prod6}/>
                      <Card source={prod7}/>
                      <Card source={prod8}/>
                      <Card source={prod9}/>
                      <Card source={prod10}/>

                      <Card source={prod11}/>
                      <Card source={prod12}/>
                      <Card source={prod13}/>
                      <Card source={prod14}/>
                      <Card source={prod15}/>
                      <Card source={prod16}/>
                      <Card source={prod17}/>
                      <Card source={prod18}/>
                      <Card source={prod19}/>
                      <Card source={prod20}/>

                      <Card source={prod21}/>
                      <Card source={prod22}/>
                      <Card source={prod23}/>
                      <Card source={prod24}/>
                      <Card source={prod25}/>
                      <Card source={prod26}/>
                      <Card source={prod27}/>
                      <Card source={prod28}/>
                      <Card source={prod29}/>
                      <Card source={prod30}/>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products
