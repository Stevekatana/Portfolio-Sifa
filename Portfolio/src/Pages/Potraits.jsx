import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import Card from '../Components/Card';
import pot1 from '../assets/Potraits/1.JPG'
import pot2 from '../assets/Potraits/2.JPG'
// import pot3 from '../assets/Potraits/3.JPG'
import pot4 from '../assets/Potraits/4.JPG'
import pot5 from '../assets/Potraits/5.JPG'
// import pot6 from '../assets/Potraits/6.JPG'
import pot7 from '../assets/Potraits/7.JPG'
import pot8 from '../assets/Potraits/8.JPG'
import pot9 from '../assets/Potraits/9.JPG'
// import pot10 from '../assets/Potraits/10.JPG'
// import pot11 from '../assets/Potraits/11.JPG'
import pot12 from '../assets/Potraits/12.JPG'
import pot13 from '../assets/Potraits/13.JPG'
import pot14 from '../assets/Potraits/14.JPG'
import pot15 from '../assets/Potraits/15.JPG'
import pot16 from '../assets/Potraits/16.JPG'
import pot17 from '../assets/Potraits/17.JPG'
import pot18 from '../assets/Potraits/18.JPG'
import pot19 from '../assets/Potraits/19.JPG'
import pot20 from '../assets/Potraits/20.JPG'
import pot21 from '../assets/Potraits/21.JPG'
import pot22 from '../assets/Potraits/22.JPG'
import pot23 from '../assets/Potraits/23.JPG'
// import pot24 from '../assets/Potraits/24.JPG'
import pot25 from '../assets/Potraits/25.JPG'
import pot26 from '../assets/Potraits/26.JPG'
import pot27 from '../assets/Potraits/27.JPG'
import pot28 from '../assets/Potraits/28.JPG'
import pot29 from '../assets/Potraits/29.JPG'
import pot30 from '../assets/Potraits/30.JPG'

import { useNavigate } from 'react-router-dom';

function Potraits() {
    const navigate = useNavigate()
    function goBack(){navigate('/')}
    return (
        <div className='bg-midnight h-auto lg:h-auto'>
            <section className='flex items-center justify-center w-full p-5'>
                <div className='w-1/2'>
                    <IoMdArrowBack onClick={goBack}className='text-Accent ml-3 text-3xl' />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-Accent text-3xl uppercase -ml-15'>POTRAIT SHOTS</h1>
                </div>
            </section>

            <section>
                {/* grid section */}
                <div className='flex items-center justify-center'>
                    <div className='gap-2 grid grid-cols-1 grid-rows-10 lg:grid-cols-4 '>
                        
                        <Card source={pot1}/>
                        <Card source={pot2}/>
                        <Card source={pot4}/>
                        <Card source={pot7}/>
                        <Card source={pot8}/>
                        <Card source={pot9}/>

                        <Card source={pot12}/>
                        <Card source={pot13}/>
                        <Card source={pot14}/>
                        <Card source={pot15}/>
                        <Card source={pot16}/>
                        <Card source={pot17}/>
                        <Card source={pot18}/>
                        <Card source={pot19}/>
                        <Card source={pot20}/>

                        <Card source={pot21}/>
                        <Card source={pot22}/>
                        <Card source={pot23}/>
                        <Card source={pot25}/>
                        <Card source={pot26}/>
                        <Card source={pot27}/>
                        <Card source={pot28}/>
                        <Card source={pot29}/>
                        <Card source={pot30}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Potraits
