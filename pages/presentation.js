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
            <div className="flex justify-center lg:max-h-screen overflow-hidden relative">
                <img src="/image/presentation/17.jpg" alt="Fitnesswork Hero Page" className="object-cover object-center min-w-min lg:min-w-full max-h-[80vh]" />
                <div className="absolute top-0 bottom-0 left-0 right-0 backdrop-sepia-0 bg-white/70"></div>
                <div className="container absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center max-w-2xl mx-auto text-white text-center">
                    {/* <img src="./image/LogoFitnessworkPutih.png" alt="Fitnessworks" className="w-full" /> */}
                    <p className="text-[#261F53] font-Poppins">
                        Segera Kunjungi & Rasakan Pengalaman Baru Gym Modern
                    </p>
                    <Link href="https://www.google.co.id/maps/place/Fitnessworks+Waterpark+Citraland/@-7.2880346,112.6352727,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7fd032224324b:0x643fe68f61afa9e2!8m2!3d-7.2880346!4d112.6352727" className='mt-16'>
                        {/* <ButtonLink text="Kunjungi Lokasi" link="#" /> */}
                        <button className="outline outline-offset-2 outline-1 rounded-md outline-[#261F53]">
                            <p className="px-4 text-[#231A47] font-Poppins text-2xl text-[14px]">Kunjungi Lokasi</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default presentation