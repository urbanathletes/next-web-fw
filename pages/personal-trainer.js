import React from 'react'
import ButtonLink from '../components/ButtonLink'
import Layout from '../components/Layout'

function PersonalTrainer() {
  return (
    <Layout title="Personal Trailner">
      <div className="lg:max-h-screen relative">
        <img src="/image/personal_trainer/PT2.jpg" alt="Fitnesswork Personal Trainer" className="object-cover object-center max-h-[30rem] w-full"/>
        <div className="text-center h-24 bg-blue-primary flex items-center">
          <h1 className="font-judul text-4xl text-center text-white mx-auto">ACHIEVE YOUR GOALS WITH A PERSONAL TRAINER</h1>
        </div>
      </div>

      <div className="container text-blue-primary">
        <div className="border-t-4 border-blue-primary my-8 py-6">
          <h1 className="font-judul text-4xl">WHAT IS A PERSONAL TRAINER?</h1>
          <div className="space-y-4 mt-4">
            <p>A personal trainer (PT) is a certified individual who has the knowledge, skills and abilities to design safe and effective exercise programmes.</p>
            <p>They help their clients to achieve health and fitness goals, such as fat loss, muscle gain, improved sports performance and various other aims, by delivering a safe and effective workout programme, and providing guidance, support, and motivation.</p>
            <p>Many Personal Trainers choose a career within the fitness industry as they have undertaken their own journey and are passionate about helping others achieve their health and fitness goals. You might look at a PT and think they have always been physically fit, but often they know what it’s like to be new to a gym environment and not knowing where to start.</p>
          </div>
        </div>
        <div className="border-t-4 border-blue-primary my-8 py-6">
          <h1 className="font-judul text-4xl">WHAT IS A PERSONAL TRAINER?</h1>
          <p className="font-black mt-4">There are several benefits of personal training. These include:</p>
          <ul className="space-y-4 mt-4 list-disc ml-5">
            <li>Learning the correct form: A Personal Trainer will guide you on how to perform exercises correctly and safely, making sure you target the right muscles while preventing injuries. Even the most experienced gym goers can struggle with form!</li>
            <li>Knowledge and experience: Personal Trainers have a huge wealth of knowledge on everything from the human anatomy to the best training methods. Working with a PT means you benefit from this information without needing to do the research yourself, or having to trial methods which are not effective.</li>
            <li>Pushing your limits: Personal Trainers are passionate and supportive, but they’ll also challenge and motivate you to push yourself further. It is much easier to break through a plateau or smash personal bests when working with a PT!</li>
            <li>Being held accountable: Sometimes, the toughest battle is getting to the gym. Having a Personal Trainer keeps you accountable on your health and fitness journey, so you can reach your goals quicker.</li>
            <li>Getting a bespoke training programme: There is no one size fits all when it comes to fitness. Personal Trainers will create a tailored training programme to suit your needs, abilities and goals, making sure it is challenging but achievable.</li>
          </ul>
        </div>
      </div>

      <div className="bg-neutral-100">
        <div className="bg-blue-primary text-white font-judul text-4xl my-12 text-center py-8">
          <h2>WHY USE A PERSONAL TRAINER?</h2>
        </div>
        <div className="container text-blue-primary">
          <img src="/image/personal_trainer/PT1.jpg" alt="Fitnesswork Personal Trainer" className="w-full max-w-2xl mx-auto"/>
          <div className="py-8">
            <ul className="list-disc">
              <li className="my-4">
                <h3 className="font-judul text-2xl">Know where to start.</h3>
                <p>Joining a gym can be intimidating and it’s easy to feel a bit overwhelmed. The PTs at PureGym are here to get you up and running and give you support where you need it.</p>
              </li>
              <li className="my-4">
                <h3 className="font-judul text-2xl">Achieve your goals as a team.</h3>
                <p>Whatever your goal, working with a PT will challenge you and help you get there quicker than on your own. </p>
              </li>
              <li className="my-4">
                <h3 className="font-judul text-2xl">Train the best way.</h3>
                <p>PTs are industry experts and committed to showing you the best, and safest, ways to train.</p>
              </li>
            </ul>
            <div className="flex justify-center py-8">
              <ButtonLink text="BOOK NOW" link="/membership"/>
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}

export default PersonalTrainer