import React from 'react'
import ButtonLink from '../ButtonLink'

export const SectionPromotionItems = () => {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 my-4">
      <div className="text-center my-4 space-y-4 relative pb-16">
        <div>
          <img src="/image/home/Icon_1.png" alt="FW Icon" className="mx-auto w-28"/>
        </div>
        <div className="text-blue-primary font-BebasNeue text-2xl font-black">
          <h2>TIME BASED MEMBERShip, <br/>With various Pricing Plan</h2>
        </div>
        <div className="max-w-xs mx-auto py-4">
          <p>
            We created the first time based membership system, in Indonesia. This system let you to choose how long you want to be in our club. You only pay while you in our club. What price you want, what exercise you need, what facility you get, all in your control, packed with our Fitnessworks Apps.
          </p>
        </div>
        <div className="flex justify-center absolute bottom-0 right-0 left-0">
          <ButtonLink text="MEMBERSHIP OPTION" link="/membership" />
        </div>
      </div>
      <div className="text-center my-4 space-y-4 relative pb-16">
        <div>
          <img src="/image/home/Icon_2.png" alt="FW Icon" className="mx-auto w-28"/>
        </div>
        <div className="text-blue-primary font-BebasNeue text-2xl font-black">
          <h2>High quality & Trendy design <br/>gym & Classes</h2>
        </div>
        <div className="max-w-xs mx-auto py-4">
          <p>
            We realize, nowdays, high quality equipment & class isn’t enough. Our trendy design will keep you exist on your social media. Furthermore, our trendy design will boosting your mood to exercise, which will support you to achieve your fitness goals.
          </p>
        </div>
        <div className="flex justify-center absolute bottom-0 right-0 left-0">
          <ButtonLink text="FIND OUT MORE" link="/workouts" />
        </div>
      </div>
      <div className="text-center my-4 space-y-4 relative pb-16">
        <div>
          <img src="/image/home/Icon_3.png" alt="FW Icon" className="mx-auto w-28"/>
        </div>
        <div className="text-blue-primary font-BebasNeue text-2xl font-black">
          <h2>FREE Fitnessworks APP</h2>
        </div>
        <div className="max-w-xs mx-auto py-4">
          <p>Our top rated, free app features a personalised workout tracking for every member. you can buy or upgrade membership everywhere & anytime you need. Booking your class and PT appointment from anywhere and anytime</p>
        </div>
        <div className="flex justify-center absolute bottom-0 right-0 left-0">
          <ButtonLink text="FIND OUT MORE" link="/fitnessworks-apps" />
        </div>
      </div>
      <div className="text-center my-4 space-y-4 relative pb-16">
        <div>
          <img src="/image/home/Icon_4.png" alt="FW Icon" className="mx-auto w-28"/>
        </div>
        <div className="text-blue-primary font-BebasNeue text-2xl font-black">
          <h2>SUPPORTING YOUR HEALTH <br/>JOURNEY</h2>
        </div>
        <div className="max-w-xs mx-auto py-4">
          <p>Whether it’s support from a Personal Trainer, your expert Gym Team, our app, help is always at hand.</p>
        </div>
        <div className="flex justify-center absolute bottom-0 right-0 left-0">
          <ButtonLink text="FIND OUT MORE" link="/contact-us" />
        </div>
      </div>
    </div>
  )
}
