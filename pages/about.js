import Layout from '../components/Layout';
import { SectionPromotionItems } from '../components/Pages/SectionPromotionItems';
import { SectionSupportingYouEvery } from '../components/Pages/SectionSupportingYouEvery';

function About() {
  return (
    <Layout>
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative 2xl:container 2xl:mx-auto">
        <img src="/image/aboutUs/About_Us.jpg" alt="Fitnesswork Hero Page" className="object-cover object-center min-w-min lg:min-w-full max-h-[60vh]"/>
      </div>

      <div className="container mx-auto max-w-2xl text-center my-8 text-blue-primary">
        <h1 className="font-judul text-5xl py-4">FITNESSWORKS DIFFERENCE</h1>
        <p>
          We are the first Gym & Fitness Centre with technology & time-based membership system, in Indonesia. Packed with Fitnessworks App, our great new features ensure you’re able to manage your membership from the palm of your hand. Such as, contactless check in & Check out, time based membership plan, class booking, PT booking, and many more!
        </p>
      </div>
      <div className="my-4 lg:flex lg:justify-center lg:items-center lg:space-x-4 bg-neutral-100">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <img src="/image/workouts/Weight_loss.jpg" alt="Fitnesswork" className="w-full object-cover object-center"/>
        </div>
        <div className="px-4 grid items-center text-blue-primary">
          <div className="max-w-xl mx-auto">
            <h2 className="text-4xl font-judul">ABOUT US</h2>
            <div className="my-4">
              <p>Fitnessworks is a new experience in fitness. we are the first gym & fitness Centre with technology based, in Indonesia. with technology we can provide high level facility & activity with low-cost membership plan, so everyone can join & begin their fitness journey. it is our mission to create fitness for everyone.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-2xl text-center my-8 text-blue-primary">
        <h1 className="font-judul text-5xl py-4">QUALITY, AFFORDABLE GYMS, & TRENDY DESIGN</h1>
        <p>We’re committed to bringing high quality facilities, yet affordable gyms to everyone. As we know high quality facilities isn’t enough. We provide you with trendy design and instagramable. Our trendy design keep you exist on your social media. Furthermore, our trendy design will boosting your mood to exercise, which will support you to achieve your fitness goals.</p>
      </div>
      
      <SectionPromotionItems />
      
      <SectionSupportingYouEvery />

    </Layout>
  )
}

export default About