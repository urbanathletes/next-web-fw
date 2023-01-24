import React from 'react'
import ButtonLink from '../../ButtonLink'

export const SectionOurProgram = () => {
  return (
    <div className="pt-6">
      <h2 className="font-judul text-center text-blue-primary text-5xl my-4">OUR PROGRAM</h2>
      <div className="grid lg:grid-cols-3 max-w-max mx-auto">
        <div className="relative bg-blue-primary">
          <div className="relative h-72 xl:h-full">
            <img src="/image/personal_trainer/PT2.jpg" alt="Fitnesswork" className="w-full h-full object-cover object-center"/>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-blue-primary"></div>
          </div>
          <div className="xl:absolute top-0 bottom-0 left-0 right-0">
            <div className="text-white text-xs xl:text-sm grid md:flex justify-between items-end h-full mx-4 xl:mx-8 pb-8">
              <div className="mr-8">
                <h2 className="font-judul text-2xl text-yellow-primary mb-4">PROFESSIONAL PERSONAL TRAINER</h2>
                <p>If you want real result, progressive and personalised exercise, we recommend you to choose this program. Our professional Personal Trainer will guide you to your body goals. Want to know more? Click View More</p>
              </div>
              <div className="min-w-fit flex items-end">
                <ButtonLink text="VIEW MORE" link="/personal-trainer" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-blue-primary">
          <div className="relative h-72 xl:h-full">
            <img src="/image/home/Photo_classes.jpg" alt="Fitnesswork" className="w-full h-full object-cover object-center"/>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-blue-primary"></div>
          </div>
          <div className="xl:absolute top-0 bottom-0 left-0 right-0">
            <div className="text-white text-xs xl:text-sm grid md:flex justify-between items-end h-full mx-4 xl:mx-8 pb-8">
              <div className="mr-8">
                <h2 className="font-judul text-2xl text-yellow-primary mb-4">FUN FITNESS CLASS WITH CERTIFIED INSTRUCTOR</h2>
                <p>If you like group exercise, fun, and various activities then you should booking our class. Know more our classes based on your fitness goals, click link on the right</p>
              </div>
              <div className="min-w-fit flex items-end">
                <ButtonLink text="VIEW MORE" link="/workouts" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="relative bg-blue-primary">
          <div className="relative h-72 xl:h-full">
            <img src="/image/home/News_Example_2.jpg" alt="Fitnesswork" className="w-full h-full object-cover object-center"/>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-blue-primary"></div>
          </div>
          <div className="xl:absolute top-0 bottom-0 left-0 right-0">
            <div className="text-white text-xs xl:text-sm grid md:flex justify-between items-end h-full mx-4 xl:mx-8 pb-8">
              <div className="mr-8">
                <h2 className="font-judul text-2xl text-yellow-primary mb-4">ONLINE WORKOUTS</h2>
                <p>Didn’t have access to nearby gym ? Worry no more! With our online class, you can choose exercise You want. Exercise everywhere, stay safe, stay fun and Stay healthy. Get the membership Now !</p>
              </div>
              <div className="min-w-fit flex items-end">
                <ButtonLink text="VIEW MORE" link="/online-class" />
              </div>
            </div>
          </div>
        </div> */}
        <div className="relative bg-blue-primary">
          <div className="relative h-72 xl:h-full">
            <img src="/image/home/Photo_pt.jpg" alt="Fitnesswork" className="w-full h-full object-cover object-center"/>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-blue-primary"></div>
          </div>
          <div className="xl:absolute top-0 bottom-0 left-0 right-0">
            <div className="text-white text-xs xl:text-sm grid md:flex justify-between items-end h-full mx-4 xl:mx-8 pb-8">
              <div className="mr-8">
                <h2 className="font-judul text-2xl text-yellow-primary mb-4">On-demand Video</h2>
                <p>Did you have crowded schedule? Need a flexible time to exercise yet still got the progress you want ? subscribe to our online streaming! exercise anytime, anywhere with professional guidance.</p>
              </div>
              <div className="min-w-fit flex items-end">
                <ButtonLink text="VIEW MORE" link="/on-demand" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
