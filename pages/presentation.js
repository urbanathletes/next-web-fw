import Image from 'next/image'
import Link from 'next/link'
import React, { Component } from 'react'
import Home from '.'
import ButtonLink from '../components/ButtonLink'
// import Layout from '../components/Layout'
// import { SectionPromotionItems } from '../components/Pages/SectionPromotionItems'
// import { HomeShopEquipment, HomeMobileAppSupporting } from '../components/Pages/Home'

const presentation = () => {
    return (
        <div className='relative'>
            {
                [...Array(16)].map((x, i) =>
                    <img key={i} src={`/image/presentation/${i}.jpg`} className='object-cover object-center h-full w-full' alt='Fitness for everyone' />
                )
            }
            {/* <img src='/image/presentation/01.jpg' className='object-cover object-center h-full w-full' alt='Fitness for everyone' />
            <img src='/image/presentation/02.jpg' className='object-cover object-center h-full w-full' alt='What is fitnessworks' />
            <img src='/image/presentation/03.jpg' className='object-cover object-center h-full w-full' alt='Why fitnessworks' />
            <img src='/image/presentation/04.jpg' className='object-cover object-center h-full w-full' alt='Fitness Points' />
            <img src='/image/presentation/05.jpg' className='object-cover object-center h-full w-full' alt='Fitness test program' />
            <img src='/image/presentation/06.jpg' className='object-cover object-center h-full w-full' alt='Apa manfaat personal trainer' />
            <img src='/image/presentation/07.jpg' className='object-cover object-center h-full w-full' alt='Gym area Fitnessworks' />
            <img src='/image/presentation/08.jpg' className='object-cover object-center h-full w-full' alt='Fitnessworks Certification' />
            <img src='/image/presentation/09.jpg' className='object-cover object-center h-full w-full' alt='Fitnessworks Variety Classes' />
            <img src='/image/presentation/10.jpg' className='object-cover object-center h-full w-full' alt='Bodycombat dan Bodypump' />
            <img src='/image/presentation/11.jpg' className='object-cover object-center h-full w-full' alt='Fitnessworks Circuit' />
            <img src='/image/presentation/12.jpg' className='object-cover object-center h-full w-full' alt='Fitnessworks zumba, muaythai, trx' />
            <img src='/image/presentation/13.jpg' className='object-cover object-center h-full w-full' alt='Fitnessworks hiphop, bootcamp, strong nation' />
            <img src='/image/presentation/14.jpg' className='object-cover object-center h-full w-full' alt='Fitnessworks pound dan core' />
            <img src='/image/presentation/15.jpg' className='object-cover object-center h-full w-full' alt='Fitnessworks Yoga' />
            <img src='/image/presentation/16.jpg' className='object-cover object-center h-full w-full' alt='Fitness for everyone thank you' /> */}

            <div className="flex justify-center lg:max-h-screen overflow-hidden relative">
                <img src="/image/presentation/17.jpg" alt="Fitnesswork Hero Page" className="object-cover object-center min-w-min lg:min-w-full max-h-[80vh]" />
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/30"></div>
                <div className="container absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center max-w-2xl mx-auto text-white text-center">
                    {/* <img src="./image/LogoFitnessworkPutih.png" alt="Fitnessworks" className="w-full" /> */}
                    <p className="text-yellow-primary font-Poppins">
                        Segera Kunjungi & Rasakan Pengalaman Baru Gym Modern
                    </p>
                    <Link href="https://www.google.com/maps/d/u/1/edit?mid=1lbBJWos9tN7de1EqcHH9o693LYQggOU&ll=-7.169582196963171%2C112.57916200000001&z=18" className='mt-16'>
                        {/* <ButtonLink text="Kunjungi Lokasi" link="#" /> */}
                        <button className="outline outline-offset-2 outline-1 rounded-md outline-yellow-primary">
                            <p className="px-4 text-yellow-primary font-Poppins text-2xl text-[14px]">Kunjungi Lokasi</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default presentation