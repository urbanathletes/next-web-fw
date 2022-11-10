import ButtonLink from '../components/ButtonLink';
import Layout from '../components/Layout';

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

      {/* <div className="py-8">
        <div className="grid md:grid-cols-2 max-w-max mx-auto">
          <div className="relative group">
            <img src="/image/home/Photo_classes.jpg" alt="Fitnesswork"/>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-primary bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="max-w-sm text-center text-white tracking-wider">
                <h2 className="font-BebasNeue text-2xl text-yellow-primary mb-4">Fitness Classes Included</h2>
                <p>We’re making fitness fun with our exciting range of fitness classes.</p>
                <div className="flex justify-center">
                  <ButtonLink text="VIEW MORE" link="/workouts" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src="/image/home/Photo_pt.jpg" alt="Fitnesswork"/>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-primary bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="max-w-sm text-center text-white tracking-wider">
                <h2 className="font-BebasNeue text-2xl text-yellow-primary mb-4">OUR Personal TraiNER</h2>
                <p>Wherever you are on your fitness journey, a personal trainer can help you reach your goals.</p>
                <div className="flex justify-center">
                  <ButtonLink text="VIEW MORE" link="/personal-trainer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="lg:flex lg:justify-center lg:items-center my-4 lg:container mx-auto">
        <div>
          <img src="/image/home/FitnessWork_apps.png" alt="Mobile App Fitness Works" className="max-w-lg mx-auto" />
        </div>
        <div className="container mx-auto lg:mx-0 text-blue-primary py-8 lg:max-w-2xl">
          <h2 className="font-BebasNeue font-black text-4xl mb-4">SUPPORTING YOU EVERY STEP OF THE WAY</h2>
          <p>Our great new features ensure you’re able to manage your membership from the palm of your hand.</p>
          <br/>
          <p>- Contactless entry to the gym through the app</p>
          <p>- Book Into your favourite classes</p>
          <p>- Manage your membership from changing your gym to updating payment details</p>
          <button className="mt-4 py-1">
          <img src="/image/aboutUs/button-google-play.png" alt="Mobile App Fitness Works" className="h-12 mx-2" />
          </button>
          <button className="mt-4 py-1">
          <img src="/image/aboutUs/button-app-store.png" alt="Mobile App Fitness Works" className="h-12 mx-2" />
          </button>
        </div>
      </div>

    </Layout>
  )
}

export default About