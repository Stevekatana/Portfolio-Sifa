import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import Card from '../Components/Card';
import Landing from '../assets/Landing.jpeg'
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
                    <h1 className='text-Accent text-3xl uppercase -ml-15'>Potraits</h1>
                </div>
            </section>

            <section>
                {/* grid section */}
                <div className='flex items-center justify-center'>
                    <div className='grid grid-cols-1 grid-rows-10 lg:grid-cols-3 gap-5 p-5'>
                        <Card 
                            source={Landing}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Potraits
