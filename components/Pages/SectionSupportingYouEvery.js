import React from 'react'

export const SectionSupportingYouEvery = () => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center lg:max-h-[35rem] relative overflow-hidden">
      <div className="w-full">
        <img src="/image/home/apps_bg.jpg" alt="Mobile App Fitness Works" className="w-full h-full object-cover object-center" />
      </div>
      <div className="
        mx-auto lg:mx-0 text-white py-8 lg:max-w-3xl xl:w-10/12 bg-blue-primary lg:bg-transparent
        lg:absolute top-0 bottom-0 left-0 right-0 flex items-center
        lg:bg-gradient-to-r from-blue-primary
        "
      >
        <div className="px-4 xs:px-8 lg:pl-20">
          <h2 className="font-BebasNeue font-black text-yellow-primary text-5xl mb-4">SUPPORTING YOU EVERY STEP OF THE WAY</h2>
          <div className="max-w-md">
            <p>
              Features packed with online join function, Class
              booking, fast check-in, fitness progress tracking,
              virtual clasess, Fitness services, club finder,
              membership management, personal trainer
              booking, member challenge and rewards
            </p>
            <p className="my-4">Download now to start your fitness journey!!</p>
          </div>
          <button className="mt-4 py-1 mx-auto sm:mx-0 inline">
            <img src="/image/aboutUs/button-app-store.png" alt="Mobile App Fitness Works" className="h-12 mx-2" />
          </button>
          <button className="mt-4 py-1 mx-auto sm:mx-0 inline">
            <img src="/image/aboutUs/button-google-play.png" alt="Mobile App Fitness Works" className="h-12 mx-2" />
          </button>
        </div>
      </div>
    </div>
  )
}
