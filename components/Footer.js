import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";

function Footer() {
  function atas() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div>
      <div className="bg-blue-primary text-white font-Poppins pt-4 pb-8 text-base">
        <div className="text-center font-BebasNeue tracking-widest text-lg my-2">
          <p><i className="icofont-instagram"></i> Follow US ON @FITNESSWORKS.ID</p>
        </div>
        <div className="py-4 flex justify-start xl:justify-center overflow-x-auto no-scrollbar">
          <img src="/image/Footer/Footer_1.jpg" alt="UA Footer" className="w-60" />
          <img src="/image/Footer/Footer_2.jpg" alt="UA Footer" className="w-60" />
          <img src="/image/Footer/Footer_3.jpg" alt="UA Footer" className="w-60" />
          <img src="/image/Footer/Footer_4.jpg" alt="UA Footer" className="w-60" />
          <img src="/image/Footer/Footer_5.jpg" alt="UA Footer" className="w-60" />
          <img src="/image/Footer/Footer_6.jpg" alt="UA Footer" className="w-60" />
        </div>
        <div className="container mx-auto font-light">
          <div className="border-b-4 border-white"></div>
          <div className="md:flex md:justify-around items-center lg:items-start">
            <div className="max-w-xs mx-auto md:mx-0 space-y-4 py-4">
              <img src="/image/LogoFitnessworkPutih.png" alt="UA Footer" className="w-60" />
              <p className="text-sm font-extralight">
                Fitnessworks is a new experience in fitness. We are the first Gym & Fitness Centre with technology & time-based membership system, in Indonesia. With technology we can provide high level facility & activity with low-cost membership plan, so everyone can join & begin their fitness journey. it is our mission to create fitness for everyone.
              </p>
              <ul className="space-y-4">
                <li><MdLocationPin className="mr-4 text-xl inline"/> View Location</li>
                <li><MdOutlineEmail className="mr-4 text-xl inline"/> Info@fitnessworks.co.id</li>
                <li>
                  <a href="https://wa.me/628179288880" target="_blank" rel="noreferrer">
                    <IoLogoWhatsapp className="mr-4 text-xl inline"/> 0817 - 9188 - 880
                  </a>
                </li>
              </ul>
            </div>
            <div className="mx-auto grid md:grid-cols-2 xl:grid-cols-4 md:ml-8 max-w-xs md:max-w-full md:w-full md:mx-0">
              <div className="md:mx-auto space-y-4 py-4">
                <h3 className="text-xl text-yellow-primary font-black">OUR GYM</h3>
                <p><Link href="/workouts" onClick={atas}>Workouts</Link></p>
                <p><Link href="/personal-trainer" onClick={atas}>Personal Trainer</Link></p>
              </div>
              <div className="md:mx-auto space-y-4 py-4">
                <h3 className="text-xl text-yellow-primary font-black">COMPANY</h3>
                <p><Link href="/about" onClick={atas}>About Us</Link></p>
                <p><Link href="/fitnessworks-apps" onClick={atas}>Mobile Apps</Link></p>
                <p><Link href="/" onClick={atas}>Presentation</Link></p>
                <p><Link href="/#partnership">Partnership</Link></p>
              </div>
              <div className="md:mx-auto space-y-4 py-4">
                <h3 className="text-xl text-yellow-primary font-black">STORE</h3>
                <p><Link href="/fitnessworks-apps" onClick={atas}>Membership</Link></p>
                <p><Link href="/personal-trainer" onClick={atas}>Training Equipment <br/> & Merchandise</Link></p>
              </div>
              <div className="md:mx-auto space-y-4 py-4">
                <h3 className="text-xl text-yellow-primary font-black">GET ASSISTANCE</h3>
                <p><Link href="/contact-us" onClick={atas}>Help & Contact</Link></p>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Youtube</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer