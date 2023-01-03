import React from 'react'
import ButtonLink from '../../ButtonLink'

export const HomeMobileAppSupporting = () => {
  return (
    <div className="md:flex md:justify-center md:items-center my-4 lg:px-8">
      <div>
        <img src="/image/home/FitnessWork_apps.png" alt="Mobile App Fitness Works" />
      </div>
      <div className="text-center text-blue-primary py-8 md:max-w-2xl">
        <h2 className="font-BebasNeue font-black text-4xl mb-4">SUPPORTING YOU EVERY STEP OF THE WAY</h2>
        <p>The Fitnesswork app lets you manage your membership from the palm of your hand. With contactless entry, access to over 600 workouts and personalised training plans. And so much more!</p>
        <div className="flex justify-center">
          <ButtonLink text="FIND OUT MORE" link="/fitnessworks-apps" />
        </div>
      </div>
    </div>
  )
}
