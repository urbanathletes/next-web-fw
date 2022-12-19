import React from 'react'
import InputText from '../components/InputText'
import { BsInstagram } from "react-icons/bs";
import Layout from '../components/Layout';

function ContactUs() {

  return (
    <Layout title="Contavt Us">
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative h-96">
        <img src="/image/home/Hero_slide_2.jpg" alt="Fitnesswork Contact Us" className="object-cover object-center h-full sm:min-w-full"/>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center text-center h-24 bg-white bg-opacity-80">
          <h1 className="font-judul text-5xl text-center text-blue-primary">Market Strategy</h1>
        </div>
      </div>
      <div>
        <iframe title='map' src="https://www.google.com/maps/d/u/1/embed?mid=1BLfrcfUk0H2FggTjFXoI0RILoBbTR-o&ehbc=2E312F" width="100%" height="480"/>
      </div>
      
      <div className="container text-blue-primary grid lg:grid-cols-2">
        <div className="my-4 lg:pr-16">
          <div className="py-4 border-b-2 border-neutral-100">
            <h1 className="font-judul text-5xl">FEEL FREE TO ASK US!</h1>
            <p>find out more and ask us something to find a solution to your problem.</p>
          </div>
          <div className="py-4">
            <div className="my-4">
              <div className="inline-flex">
                <i className="p-2 bg-blue-primary text-white"><BsInstagram /></i>
                <p className="py-1 px-4 border-2 border-blue-primary">Fitnessworks.id</p>
              </div>
            </div>
            <div className="my-4">
              <div className="inline-flex">
                <i className="p-2 bg-blue-primary text-white"><BsInstagram /></i>
                <p className="py-1 px-4 border-2 border-blue-primary">Fitnessworks.id</p>
              </div>
            </div>
            <div className="my-4">
              <div className="inline-flex">
                <i className="p-2 bg-blue-primary text-white"><BsInstagram /></i>
                <p className="py-1 px-4 border-2 border-blue-primary">Fitnessworks.id</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 py-4">
          <form>
            <div className="grid grid-cols-2 gap-x-4">
              <InputText label="Full Name" type="text" />
              <InputText label="Email" type="email" />
            </div>
            <div className="space-y-6">
              <InputText label="Subject" type="text" />
              <textarea className="my-4 p-2 w-full outline-none border border-blue-primary" rows="5"></textarea>
              <div className="flex justify-end">
                <button className="border border-blue-primary py-1 px-10 w-1/2 hover:bg-blue-primary hover:text-yellow-primary transition-all duration-300 font-judul tracking-wide">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container border-t-8 border-neutral-100 my-4 py-4 text-blue-primary text-sm">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <div>
            <h2 className="font-judul text-2xl">FITNESSWORKs CLUB A</h2>
            <p>Jl. Tidar No.350, Tembok Dukuh, Kec. Bubutan, Kota SBY, Jawa Timur 60173</p>
            <p>Phone : (031) 99252900</p>
          </div>
          <div>
            <h2 className="font-judul text-2xl">FITNESSWORKs CLUB B</h2>
            <p>Jl. Tidar No.350, Tembok Dukuh, Kec. Bubutan, Kota SBY, Jawa Timur 60173</p>
            <p>Phone : (031) 99252900</p>
          </div>
          <div>
            <h2 className="font-judul text-2xl">FITNESSWORKs CLUB C</h2>
            <p>Jl. Tidar No.350, Tembok Dukuh, Kec. Bubutan, Kota SBY, Jawa Timur 60173</p>
            <p>Phone : (031) 99252900</p>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default ContactUs