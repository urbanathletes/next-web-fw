import Link from 'next/link'
import ButtonLink from '../components/ButtonLink'
import Layout from '../components/Layout'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Pixel1 from '../components/facebook/Pixel1'
import { BsCheck2Square } from "react-icons/bs";


export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative">
        <img src="/image/Header_home.jpg" alt="Fitnesswork Hero Page" className="object-cover object-center min-w-min lg:min-w-full max-h-[80vh]"/>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/30"></div>
        <div className="container absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center max-w-2xl mx-auto text-white text-center">
          <img src="./image/LogoFitnessworkPutih.png" alt="Fitnessworks" className="w-full" />
          <p>
            Fitnessworks is a new experience in fitness. We are the first Gym & Fitness Centre with technology & time-based membership system, in Indonesia. With technology we can provide high level facility & activity with low-cost membership plan, so everyone can join & begin their fitness journey. it is our mission to create fitness for everyone.
          </p>
          {/* <button className="border border-yellow-primary px-4 py-1 my-4">
            VIEW MORE
          </button> */}
          <ButtonLink text="VIEW MORE" link="/about" />
        </div>
      </div>
      <div className="2xl:container bg-blue-primary px-0 md:max-h-96 relative overflow-hidden object-fill md:flex">
        <div className="text-white w-full max-w-xl min-h-[13rem] relative md:static">
          <div className="absolute mx-8 xl:ml-12 z-20 grid items-center h-full">
            <div className="container">
              <p>START NOW FOR FREE ! be a better version of you, NO EXCUSES !</p>
              {/* <p>Get your 3 days trial, get rid all your excuses, </p>
              <p>change now or never! Make better version of you with Fitnessworks.</p>
              <p>#fitnessforeveryone</p> */}
              <div className="text-yellow-primary my-4">
                <ButtonLink text="GET TRIAL" link="/form-free-trial" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute h-full w-full bg-gradient-to-b md:bg-gradient-to-r from-blue-primary"></div>
          <img src="/image/home/Slide2.jpg" alt="FitnessWork" className="object-cover object-center w-full h-full md:ml-auto max-w-5xl" />
        </div>
      </div>

      <div className="pt-6">
        <h2 className="font-judul text-center text-blue-primary text-5xl my-4">OUR PROGRAM</h2>
        <div className="grid md:grid-cols-2 max-w-max mx-auto">
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
          <div className="relative bg-blue-primary">
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
          </div>
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

      <div className="flex justify-center lg:max-h-screen overflow-hidden">
        <video className="object-cover object-right min-w-min lg:min-w-full" loop autoPlay muted>
          <source src="/video/VideoBannerUA.mp4" type="video/mp4" />
        </video>
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

      <div className="md:flex md:justify-center md:items-center my-4">
        <div>
          <img src="/image/home/FitnessWork_apps.png" alt="Mobile App Fitness Works" className="md:max-w-md lg:max-w-lg mx-auto" />
        </div>
        <div className="text-center text-blue-primary py-8 md:max-w-3xl">
          <h2 className="font-BebasNeue font-black text-4xl mb-4">SUPPORTING YOU EVERY STEP OF THE WAY</h2>
          <p>The Fitnesswork app lets you manage your membership from the palm of your hand. With contactless entry, access to over 600 workouts and personalised training plans. And so much more!</p>
          <div className="flex justify-center">
            <ButtonLink text="FIND OUT MORE" link="/fitnessworks-apps" />
          </div>
        </div>
      </div>

      <div className="bg-blue-primary py-8">
        <div className="relative py-10 text-center text-white font-BebasNeue font-black">
          <h1 className="text-[10rem] opacity-20 py-8">SHOP</h1>
          <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
            <h1 className="text-4xl sm:text-6xl">training equipment & Merchandise</h1>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 container mx-auto">
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Gym_bag.jpg" alt="Shop" className="max-w-xs mx-auto"/>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Slaves_yellow.jpg" alt="Shop" className="max-w-xs mx-auto"/>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Gym_bag_2.jpg" alt="Shop" className="max-w-xs mx-auto"/>
              <div className="absolute top-0 left-0 pt-4 pl-4">
                <p className="bg-neutral-500 text-white px-3 py-1">NEW</p>
              </div>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Tshirt.jpg" alt="Shop" className="max-w-xs mx-auto"/>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Mini_towel.jpg" alt="Shop" className="max-w-xs mx-auto"/>
              <div className="absolute top-0 left-0 pt-4 pl-4">
                <p className="bg-neutral-500 text-white px-3 py-1">NEW</p>
              </div>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Yoga_mat.jpg" alt="Shop" className="max-w-xs mx-auto"/>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="relative py-10 text-center text-blue-primary font-BebasNeue font-black">
          <h1 className="text-[10rem] opacity-20 py-8">SHOP</h1>
          <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
            <h1 className="text-5xl">PRICING PLAN</h1>
          </div>
        </div>
        <div className="lg:flex justify-center">
          <div className="max-w-md w-full mx-auto lg:mx-8 my-8">
            <div className="bg-yellow-primary text-blue-primary text-center">
              <h1 className="text-4xl py-4 font-BebasNeue font-black tracking-wider">EARLY RISER</h1>
            </div>
            <div className="bg-neutral-100 p-6 text-blue-primary">
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8">UNLIMITED <br/>ACCES</h1>
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8 pt-8">START FROM</h1>
              <div className="flex pb-4">
                <p>RP</p><p className="text-4xl font-black mx-2">248.000</p><p className="mt-auto">All Club / Month</p>
              </div>
              <div className="ml-8 text-lg py-4">
              
                <p className="-indent-8"><BsCheck2Square className="inline text-2xl mr-2" /> Check in start from 06.00 WIB</p>
                <p className="-indent-8"><BsCheck2Square className="inline text-2xl mr-2" /> Free Access All Class</p>
                <p className="-indent-8"><BsCheck2Square className="inline text-2xl mr-2" /> Get Gym Bag</p>
                <p className="-indent-8"><BsCheck2Square className="inline text-2xl mr-2" /> Free 3 sessions with <br/>Personal Trainer</p>
              </div>
              <div className="text-center py-4">
                <div className="flex justify-center">
                  <ButtonLink text="View More" link="/membership" />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full mx-auto lg:mx-8 my-8">
            <div className="bg-blue-primary text-yellow-primary text-center">
              <h1 className="text-4xl py-4 font-BebasNeue font-black tracking-wider">NIGHT OWL</h1>
            </div>
            <div className="bg-neutral-100 p-6 text-blue-primary">
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8">UNLIMITED <br/>ACCES</h1>
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8 pt-8">START FROM</h1>
              <div className="flex pb-4">
                <p>RP</p><p className="text-4xl font-black mx-2">278.000</p><p className="mt-auto">All Club / Month</p>
              </div>
              <div className="ml-8 text-lg py-4">
                <p className="-indent-8"><BsCheck2Square className="inline text-2xl mr-2" /> Check in start from 15.00 WIB</p>
                <p className="-indent-8"><BsCheck2Square className="inline text-2xl mr-2" /> Free Access All Class</p>
                <p className="-indent-8"><BsCheck2Square className="inline text-2xl mr-2" /> Get Gym Bag</p>
                <p className="-indent-8"><BsCheck2Square className="inline text-2xl mr-2" /> Free 3 sessions with <br/>Personal Trainer</p>
              </div>
              <div className="text-center py-4">
                <div className="flex justify-center">
                  <ButtonLink text="View More" link="/membership" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-blue-primary">
        <h1 className="font-judul text-center text-6xl">LATEST BLOG POSTS</h1>
        <div className="container mx-auto md:flex md:flex-wrap md:justify-center">
          <div className="max-w-xs overflow-hidden mx-auto my-8">
            <Link href="/article">
              <img src="/image/article/news3.png" alt="LATEST BLOG POSTS" className="object-cover object-center min-w-min mx-auto max-h-72"/>
              <div className="p-2">
                <h2 className="font-judul text-2xl tracking-wider mb-4">5 hal yang perlu kamu siapkan sebelum pertama kali pergi ke gym?</h2>
                <p>Buat kamu yang pertama kali melakukan sesuatu biasanya mengalami kebingungan dan keraguan. Apalagi ... </p>
              </div>
            </Link>
          </div>
          <div className="max-w-xs overflow-hidden mx-auto my-8">
            <Link href="/article">
              <img src="/image/article/news1.png" alt="LATEST BLOG POSTS" className="object-cover object-center min-w-min mx-auto max-h-72"/>
              <div className="p-2">
                <h2 className="font-judul text-2xl tracking-wider mb-4">Apa penyebab lemak perut</h2>
                <p>Lemak perut memang menjengkelkan. Apalagi kalau sudah merusak penampilan dan jadi membatasi ruang ... </p>
              </div>
            </Link>
          </div>
          <div className="max-w-xs overflow-hidden mx-auto my-8">
            <Link href="/article">
              <img src="/image/article/news5.png" alt="LATEST BLOG POSTS" className="object-cover object-center min-w-min mx-auto max-h-72"/>
              <div className="p-2">
                <h2 className="font-judul text-2xl tracking-wider mb-4">Program diet untuk turunkan berat badan</h2>
                <p>Terkadang untuk menurunkan berat badan, olahraga saja tidak cukup. Beberapa orang, mungkin ... </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div id='partnership'>
        <div className="text-center">
          <p className="font-judul text-2xl">UNPARALLELED</p>
          <h2 className='font-judul text-6xl text-blue-primary'>BUSINESS SUPPORT</h2>
        </div>
        <div className="flex flex-wrap justify-around items-center py-4 lg:px-10">
          <img src="/image/logo/LOGO_UA_HITAM_TM.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
          <img src="/image/logo/URBAN-LOGO_JR_HIRES.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
          <img src="/image/logo/URBAN-FALCON FINAL-TM.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
          <img src="/image/logo/Valor_TM.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
          <img src="/image/logo/LogoFitnessworkPanjang.png" alt="BUSINESS SUPPORT" className="h-12 m-4"/>
          <img src="/image/logo/CIRCUIT.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
        </div>
      </div>
      <Pixel1 />
    </Layout>
  )
}
